const express = require("express");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const url = require("url");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const PORT = 8888;
const app = express();
// eslint-disable-next-line
const endPointRoot = "/4537/termproject/api/v1/";
const getUserRoot = "/4537/termproject/api/v1/user";
const getAllUsersRoot = "/4537/termproject/api/v1/users";
const createUsersRoot = "/4537/termproject/api/v1/user";
const loginUserRoot = "/4537/termproject/api/v1/login";

const getProjectRoot = endPointRoot + "project";
const getAllProjectsRoot = endPointRoot + "projects";
const createProjectRoot = endPointRoot + "project";
const updateProjectRoot = endPointRoot + "project";
const deleteProjectRoot = endPointRoot + "project";

const getSolutionRoot = endPointRoot + "project/solution";
const getAllSolutionsRoot = endPointRoot + "project/solutions";
const createSolutionRoot = endPointRoot + "project/solution";
const updateSolutionRoot = endPointRoot + "project/solution";
const deleteSolutionRoot = endPointRoot + "project/solution";
// const createProjectRoot = endPointRoot + "project";
// const updateProjectRoot = endPointRoot + "project";
// const deleteProjectRoot = endPointRoot + "project";

const USER_TABLE = "user";

const JWT_PRIVATE =
    "8B0D591C98BE7D05DBEAB239E82CD3BE334704471DAEB54BAB91FB6E2D53F3C1";
const POSTIFY_AUTH_COOKIE = "postify_auth";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "postify",
    multipleStatements: true
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Server!");
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", `http://localhost:8080`);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Request-With, Origin, Authorization"
    );
    next();
});
app.use(express.json());
app.use(cookieParser());

// https://www.youtube.com/watch?v=9N7uqbuODqs
const requireAuth = (req, res, next) => {
    if (!req.cookies || !req.cookies[POSTIFY_AUTH_COOKIE]) {
        res.redirect(loginUserRoot);
        return;
    }

    let token = req.cookies[POSTIFY_AUTH_COOKIE];
    
    let valid = jwt.verify(token, JWT_PRIVATE);
    if (valid) {
        next();
    } else {
        res.redirect(loginUserRoot);
        return;
    }
};

app.get(getAllUsersRoot, requireAuth, (req, res) => {
    const sqlQuery = `SELECT * FROM user; UPDATE statistic SET createAllUsersAPI = createAllUsersAPI + 1`;
    // console.log(1);
    // console.log(req.url);
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});


app.get(getUserRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const sqlQuery = `SELECT * FROM user WHERE userID=${urlQuery.query["userID"]}; UPDATE statistic SET setUserAPI = setUserAPI + 1`;

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve User from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});


app.post(createUsersRoot, (req, res) => {
    if (!req.body) {
        res.status(400).send("The reuqest is malformatted");
        return;
    }
    if (!req.body.lastName || !typeof req.body.lastName === "string") {
        res.status(400).send("A last name string was not provided");
        return;
    }
    if (!req.body.firstName || !typeof req.body.firstName === "string") {
        res.status(400).send("A first name string was not provided");
        return;
    }
    if (!req.body.userName || !typeof req.body.userName === "string") {
        res.status(400).send("A userName string was not provided");
        return;
    }
    if (!req.body.password || !typeof req.body.password === "string") {
        res.status(400).send("A password string was not provided");
        return;
    }

    db.query(
        `SELECT * FROM ${USER_TABLE} WHERE userName = ?; UPDATE statistic SET createUsersAPI = createUsersAPI + 1`,
        [req.body.userName],
        (err, result) => {
            if (err) {
                res.status(500).send(`An internal database error occurred`);
                console.log(err);
                return;
            }
            if (result[0].length != 0) {
                console.log(result);
                res.status(400).send(`userName already exists`);
                return;
            }
            try {
                argon2
                    .hash(req.body.password, {
                        hashLength: 32, // 256 bit hash
                        timeCost: 2, // 2 iterations
                        memoryCost: 15360, // 15 KiB
                        parallelism: 1, // 1 thread
                        type: argon2.argon2id, // argon2id method
                        saltLength: 16, // 128 bit salt
                    })
                    .then((hash) => {
                        db.query(
                            `INSERT INTO ${USER_TABLE}(lastName, firstName, userName, password, joinDate) VALUES (?, ?, ?, ?, NOW()); UPDATE statistic SET createUsersAPI = createUsersAPI + 1`,
                            [req.body.lastName, req.body.firstName, req.body.userName, hash],
                            (err) => {
                                if (err) {
                                    res.status(500).send(`An internal database error occurred`);
                                    console.log(err);
                                    return;
                                }
                                res.status(200).send(`User '${req.body.userName}' was created`);
                            }
                        );
                    });
            } catch (e) {
                res.status(500).send("There was a hash error");
                console.log(e);
                return;
            }
        }
    );
});

app.post(loginUserRoot, (req, res) => {
    if (!req.body) {
        res.status(400).send("The reuqest is malformatted");
        return;
    }

    if (!req.body.userName || !typeof req.body.userName === "string") {
        res.status(400).send("A userName string was not provided");
        return;
    }

    if (!req.body.password || !typeof req.body.password === "string") {
        res.status(400).send("A password string was not provided");
        return;
    }

    db.query(
        `SELECT * FROM ${USER_TABLE} WHERE userName = ?; UPDATE statistic SET loginUserAPI = loginUserAPI + 1`,
        [req.body.userName],
        (err, result) => {
            if (err) {
                res.status(500).send(`An internal database error occurred`);
                console.log(err);
                return;
            }
            if (!result[0] || !result[0][0] || !result[0][0].password) {
                res.status(400).send(`Invalid credentials for ${req.body.userName}`);
                return;
            }
            try {
                argon2.verify(result[0][0].password, req.body.password).then((valid) => {
                    if (valid) {
                        let token = jwt.sign({
                                exp: Math.floor(Date.now() / 1000) + 60 * 60, // expire in 1 hour
                                userName: req.body.userName,
                            },
                            JWT_PRIVATE
                        );

                        res.cookie(POSTIFY_AUTH_COOKIE, token);
                        res.status(200).send("Valid login");
                    } else {
                        res.status(400).send("Invalid credentials");
                    }
                });
            } catch (e) {
                res.status(500).send("There was a hash error");
                console.log(e);
                return;
            }
        }
    );
});

app.get(getProjectRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const sqlQuery = `SELECT * FROM project WHERE projID=${urlQuery.query["projID"]}; UPDATE statistic SET getProjectAPI = getProjectAPI + 1`;

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve Project from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});

app.get(getAllProjectsRoot, (req, res) => {
    const sqlQuery = `SELECT * FROM project; UPDATE statistic SET getAllProjectsAPI = getAllProjectsAPI + 1`;

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});

app.post(createProjectRoot, (req, res) => {
    // no syntax validation
    const sqlQuery =
        "INSERT INTO project(userID, projName, projDesc, projCreationDate, projLevel) VALUES (?, ?, ?, NOW(), ?); UPDATE statistic SET createProjectAPI = createProjectAPI + 1";

        //UPDATE mytable 
        //SET logins = logins + 1 
        //WHERE id = 12
    const args = [
        req.body.userID,
        req.body.projName,
        req.body.projDesc,
        req.body.projLevel,
    ];

    //eslint-disable-next-line
    db.query(sqlQuery, args, (err, result) => {
        if (err) {
            res
                .status(404)
                .send(`Unable to store '${req.body.projName}' in Database.`);
        }
        res.status(200).send(`'${req.body.projName}' was stored in DB`);
    });
});

app.put(updateProjectRoot, (req, res) => {
    // SECUIRITY FLAW, USE PARAMETERIZED QUERIES
    const sqlQuery = `UPDATE project SET projName = '${req.body.projName}', projDesc = '${req.body.projDesc}' WHERE projID = ${req.body.projID}; UPDATE statistic SET updateProjectAPI = updateProjectAPI + 1`;

    //eslint-disable-next-line
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res
                .status(404)
                .send(`Unable to store '${req.body.projName}' in Database.`);
        }
        res.status(200).send(`'${req.body.projName}' was updated in DB`);
    });
});

app.delete(deleteProjectRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const sqlQuery = `DELETE FROM project WHERE projID = ${urlQuery.query["projID"]}; UPDATE statistic SET deleteProjectAPI = deleteProjectAPI + 1`;

    db.query(sqlQuery, (err) => {
        if (err) {
            res.status(404).send(`Unable to delete project from database.`);
        }
        res.status(200).send(`${urlQuery.query["projID"]} was deleted from DB`);
    });
});

app.get(getSolutionRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);

    console.log(req.url);
    const sqlQuery = `SELECT * FROM solution WHERE projID=${urlQuery.query["projID"]} AND solutionID=${urlQuery.query["solutionID"]}; UPDATE statistic SET getSolutionAPI = getSolutionAPI + 1`;

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve Solution from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});

app.get(getAllSolutionsRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const sqlQuery = `SELECT * FROM solution WHERE projID=${urlQuery.query["projID"]}; UPDATE statistic SET getAllSolutionsAPI = getAllSolutionsAPI + 1`;
    // console.log(1);
    // console.log(req.url);
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to retrieve Solution from database.`);
        }
        res.send(JSON.stringify(result[0]));
    });
});

app.post(createSolutionRoot, (req, res) => {
    // no input validation
    const sqlQuery = `INSERT INTO solution(projID, userID, solDesc, solGitLink, solFileURL, solUpVote, solDownVote, solCreateDate, solEditDate) VALUES (?, ?, ?, ?, ?, 0, 0, NOW(), NOW()); UPDATE statistic SET createSolutionAPI = createSolutionAPI + 1`;
    const args = [
        req.body.projID,
        req.body.userID,
        req.body.solDesc,
        req.body.solGitLink,
        req.body.solFileURL,
    ];
    console.log(req.url);
    // console.log(sqlQuery);
    // eslint-disable-next-line
    db.query(sqlQuery, args, (err, result) => {
        if (err) {
            res.status(404).send(`Unable to store in Database.`);
            return;
        }
        res.status(200).send(`'stored in DB`);
    });
});

app.put(updateSolutionRoot, (req, res) => {
    // no input validation
    const sqlQuery = `UPDATE solution SET solDesc = ?, solGitLink = ?, solFileURL = ?, solUpVote = ?, solDownVote = ?, solEditDate = NOW() WHERE solutionID = ?; UPDATE statistic SET updateSolutionAPI = updateSolutionAPI + 1`;
    const args = [
        req.body.solDesc,
        req.body.solGitLink,
        req.body.solFileURL,
        req.body.solUpVote,
        req.body.solDownVote,
        req.body.solutionID,
    ];

    // eslint-disable-next-line
    db.query(sqlQuery, args, (err, result) => {
        if (err) {
            res
                .status(404)
                .send(`Unable to store '${req.body.solDesc}' in Database.`);
            return;
        }
        res.status(200).send(`'${req.body.solDesc}' was updated in DB`);
    });
});

app.delete(deleteSolutionRoot, (req, res) => {
    const urlQuery = url.parse(req.url, true);
    const solutionID = urlQuery.query["solutionID"];

    const sqlQuery = `DELETE FROM solution WHERE solutionID = ${solutionID}; UPDATE statistic SET deleteSolutionAPI = deleteSolutionAPI + 1`;

    db.query(sqlQuery, (err) => {
        if (err) {
            res.status(404).send(`Unable to delete solution from database.`);
            return;
        }
        res
            .status(200)
            .send(`Solution ${urlQuery.parse["solutionID"]} was deleted from DB`);
    });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Listening to port: " + PORT);
});