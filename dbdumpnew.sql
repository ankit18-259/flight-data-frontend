-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: flightData
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asas`
--

DROP TABLE IF EXISTS `asas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asas` (
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `flightno` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `flightcompany` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asas`
--

LOCK TABLES `asas` WRITE;
/*!40000 ALTER TABLE `asas` DISABLE KEYS */;
INSERT INTO `asas` VALUES ('a','a','a','a','a','undefined','GAU','DEL','15/10/2021','undefined'),('a','a','a','a','a','undefined','GAU','DEL','15/10/2021','undefined'),('b','b','b','b','b','undefined','GAU','DEL','15/10/2021','undefined');
/*!40000 ALTER TABLE `asas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookedHistory`
--

DROP TABLE IF EXISTS `bookedHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookedHistory` (
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookedHistory`
--

LOCK TABLES `bookedHistory` WRITE;
/*!40000 ALTER TABLE `bookedHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookedHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flightItenerary`
--

DROP TABLE IF EXISTS `flightItenerary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flightItenerary` (
  `flightCompany` varchar(255) DEFAULT NULL,
  `flightNumber` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flightItenerary`
--

LOCK TABLES `flightItenerary` WRITE;
/*!40000 ALTER TABLE `flightItenerary` DISABLE KEYS */;
INSERT INTO `flightItenerary` VALUES ('SpiceJet','SG-182','GAU','DEL','15/10/2021'),('Vistara','UK-232','GAU','DEL','15/10/2021');
/*!40000 ALTER TABLE `flightItenerary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `undefined`
--

DROP TABLE IF EXISTS `undefined`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `undefined` (
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `flightno` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `flightcompany` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `undefined`
--

LOCK TABLES `undefined` WRITE;
/*!40000 ALTER TABLE `undefined` DISABLE KEYS */;
/*!40000 ALTER TABLE `undefined` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userData`
--

DROP TABLE IF EXISTS `userData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userData` (
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userData`
--

LOCK TABLES `userData` WRITE;
/*!40000 ALTER TABLE `userData` DISABLE KEYS */;
INSERT INTO `userData` VALUES ('ankit123','ankitsharma7279@gmail.com','ankit123'),('ankit123','ankitsharma7279@gmail.com','ankit123'),('undefined','undefined','undefined'),('undefined','undefined','undefined'),('undefined','undefined','undefined'),('undefined','undefined','undefined'),('asas','ankitsharma279','asas'),('asas','ankitsharma279','asas'),('undefined','undefined','undefined');
/*!40000 ALTER TABLE `userData` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-05 20:58:36
