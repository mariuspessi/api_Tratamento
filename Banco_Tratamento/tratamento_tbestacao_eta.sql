CREATE DATABASE  IF NOT EXISTS `tratamento` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tratamento`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tratamento
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbestacao_eta`
--

DROP TABLE IF EXISTS `tbestacao_eta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbestacao_eta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phRio` float DEFAULT NULL,
  `phFiltro` float DEFAULT NULL,
  `phTratada` float DEFAULT NULL,
  `phReservatorio` float DEFAULT NULL,
  `condtRio` float DEFAULT NULL,
  `condtTrat` float DEFAULT NULL,
  `durRio` float DEFAULT NULL,
  `durTrat` float DEFAULT NULL,
  `alcRio` float DEFAULT NULL,
  `alcTrat` float DEFAULT NULL,
  `cloroTrat` float DEFAULT NULL,
  `cloroReserv` float DEFAULT NULL,
  `dhata` varchar(255) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `analist` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbestacao_eta`
--

LOCK TABLES `tbestacao_eta` WRITE;
/*!40000 ALTER TABLE `tbestacao_eta` DISABLE KEYS */;
INSERT INTO `tbestacao_eta` VALUES (2,6.6,6.24,6.47,6.77,48.1,74.4,8,6,19,26,1,1,'2024-11-02','18:00:00','Marius'),(4,6.77,6.58,6.51,7.05,45.5,74.9,12,8,14,19,1.2,1.4,'2024-11-03','10:00:00','Felipe');
/*!40000 ALTER TABLE `tbestacao_eta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-03 11:24:01
