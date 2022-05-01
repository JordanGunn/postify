-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2022 at 05:47 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `postify`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `projID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `projName` varchar(255) NOT NULL,
  `projDesc` varchar(255) NOT NULL,
  `projCreationDate` date NOT NULL,
  `projLevel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`projID`, `userID`, `projName`, `projDesc`, `projCreationDate`, `projLevel`) VALUES
(1, 1, 'Chat Assignment in C', 'This project requires a fully implemented chat program written in C', '2022-04-02', 10),
(2, 2, 'Chat Assignment in C#', 'This project requires a fully implemented chat program written in C#', '2022-04-02', 8),
(3, 2, 'An amazing project', 'A description of my amazing project', '2022-04-02', 5),
(4, 2, 'An amazing project', 'A description of my amazing project', '2022-04-02', 5),
(5, 1, 'afdafdsfadsfdfas', '2', '2022-04-03', 0),
(6, 1, 'afdafdsfadsfdfas', '2', '2022-04-03', 0),
(7, 2, '12412sfafsfsf', 'fsfssd431212421421', '2022-04-03', 4),
(8, 5, 'asfsadfafasfasdfasd', 'asdfasfasdfdsafasdfasdfasf12321312321321321', '2022-04-03', 4);

-- --------------------------------------------------------

--
-- Table structure for table `solution`
--

CREATE TABLE `solution` (
  `solutionID` int(11) NOT NULL,
  `projID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `solDesc` varchar(255) NOT NULL,
  `solGitLink` varchar(255) NOT NULL,
  `solFileURL` varchar(255) NOT NULL,
  `solUpVote` int(11) NOT NULL,
  `solDownVote` int(11) NOT NULL,
  `solCreateDate` date NOT NULL,
  `solEditDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `solution`
--

INSERT INTO `solution` (`solutionID`, `projID`, `userID`, `solDesc`, `solGitLink`, `solFileURL`, `solUpVote`, `solDownVote`, `solCreateDate`, `solEditDate`) VALUES
(1, 1, 1, 'A fully implemented chat program written in C #1', 'chat program in C gitlink #1', 'chat program in C filelink #1', 22, 11, '2022-04-02', '2022-04-02'),
(2, 1, 2, 'An update to me amazing solution the amazing project. Im a leprechaun!', 'https://github.com/mySolutionUpdate.git', 'link.zip', 0, 0, '2022-04-02', '2022-04-02'),
(3, 2, 1, 'A fully implemented chat program written in C# #1', 'chat program in C# gitlink #1', 'chat program in C# filelink #1', 33, 1, '2022-04-02', '2022-04-02'),
(4, 2, 2, 'A fully implemented chat program written in C# #2', 'chat program in C# gitlink #2', 'chat program in C# filelink #2', 33, 1, '2022-04-02', '2022-04-02'),
(5, 1, 2, 'desc', 'link', 'file', 0, 0, '2022-04-02', '2022-04-02'),
(6, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(7, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(8, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(9, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(11, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(12, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(13, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02'),
(14, 1, 2, 'Record this API call', 'git.git.git)', 'wtf.zip)', 0, 0, '2022-04-02', '2022-04-02');

-- --------------------------------------------------------

--
-- Table structure for table `statistic`
--

CREATE TABLE `statistic` (
  `statID` int(11) NOT NULL,
  `getAllUserAPI` int(11) NOT NULL,
  `getUserAPI` int(11) NOT NULL,
  `createUsersAPI` int(11) NOT NULL,
  `loginUserAPI` int(11) NOT NULL,
  `getProjectAPI` int(11) NOT NULL,
  `getAllProjectsAPI` int(11) NOT NULL,
  `createProjectAPI` int(11) NOT NULL,
  `updateProjectAPI` int(11) NOT NULL,
  `deleteProjectAPI` int(11) NOT NULL,
  `getSolutionAPI` int(11) NOT NULL,
  `getAllSolutionsAPI` int(11) NOT NULL,
  `createSolutionAPI` int(11) NOT NULL,
  `updateSolutionAPI` int(11) NOT NULL,
  `deleteSolutionAPI` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statistic`
--

INSERT INTO `statistic` (`statID`, `getAllUserAPI`, `getUserAPI`, `createUsersAPI`, `loginUserAPI`, `getProjectAPI`, `getAllProjectsAPI`, `createProjectAPI`, `updateProjectAPI`, `deleteProjectAPI`, `getSolutionAPI`, `getAllSolutionsAPI`, `createSolutionAPI`, `updateSolutionAPI`, `deleteSolutionAPI`) VALUES
(1, 0, 0, 14, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `joinDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `lastName`, `firstName`, `userName`, `password`, `joinDate`) VALUES
(1, 'Wei', 'Charlie', 'CW', '123', '2022-03-10'),
(2, 'Doe', 'John', 'JD', '123', '2022-03-10'),
(5, 'Wei', 'Chuck', 'CWW', 'pass', '2022-03-12'),
(6, 'last', 'first', 'user', 'pass', '2022-03-12'),
(7, 'lastname', 'firstname', 'username', 'password', '2022-03-12'),
(8, '123', '123', '123', '123', '2022-03-13'),
(9, 'charlie', 'charlie', 'charlie', '$argon2id$v=19$m=15360,t=2,p=1$qLlTDoOC4kClaRv8eOo5Og$ymoGUdA9JBq7W/h8dXlbBk1PR8Ic7TEEgbG8IIjIOU4', '2022-04-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`projID`),
  ADD KEY `userId` (`userID`) USING BTREE;

--
-- Indexes for table `solution`
--
ALTER TABLE `solution`
  ADD PRIMARY KEY (`solutionID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `projID` (`projID`);

--
-- Indexes for table `statistic`
--
ALTER TABLE `statistic`
  ADD PRIMARY KEY (`statID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `projID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `solution`
--
ALTER TABLE `solution`
  MODIFY `solutionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `statistic`
--
ALTER TABLE `statistic`
  MODIFY `statID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`UserId`);

--
-- Constraints for table `solution`
--
ALTER TABLE `solution`
  ADD CONSTRAINT `solution_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`UserId`),
  ADD CONSTRAINT `solution_ibfk_2` FOREIGN KEY (`projID`) REFERENCES `project` (`projID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
