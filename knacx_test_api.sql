-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 05, 2022 at 02:09 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knacx_test_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `covid_patient`
--

CREATE TABLE `covid_patient` (
  `patient_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `patient_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `patient_lastname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `patient_age` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `patient_phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `covid_patient`
--

INSERT INTO `covid_patient` (`patient_id`, `patient_name`, `patient_lastname`, `patient_age`, `patient_phone`) VALUES
('1143279563124', 'Jonh', 'Smith', '29', '0567956432');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
