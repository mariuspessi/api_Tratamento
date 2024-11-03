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
-- Table structure for table `tbestacao_ete`
--

DROP TABLE IF EXISTS `tbestacao_ete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbestacao_ete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dhata` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `eficiencia` float DEFAULT NULL,
  `dqoD1` float DEFAULT NULL,
  `phD1` float DEFAULT NULL,
  `tempD1` float DEFAULT NULL,
  `solidosD1` float DEFAULT NULL,
  `vazao` float DEFAULT NULL,
  `CargaOrgD1` float DEFAULT NULL,
  `dqoSFlot` float DEFAULT NULL,
  `phSFloat` float DEFAULT NULL,
  `tempSFloat` float DEFAULT NULL,
  `solidosSFloat` float DEFAULT NULL,
  `ssSFloat` float DEFAULT NULL,
  `dqoRio` float DEFAULT NULL,
  `phRio` float DEFAULT NULL,
  `tempRio` float DEFAULT NULL,
  `oxRio` float DEFAULT NULL,
  `solidosRio` float DEFAULT NULL,
  `phSec` float DEFAULT NULL,
  `solidosSec` float DEFAULT NULL,
  `vazaoSec` float DEFAULT NULL,
  `phTerc` float DEFAULT NULL,
  `solidosTerc` float DEFAULT NULL,
  `vazaoTerc` float DEFAULT NULL,
  `dqoDecSec` float DEFAULT NULL,
  `phDecSec` float DEFAULT NULL,
  `tempDecSec` float DEFAULT NULL,
  `solidoDecSec` float DEFAULT NULL,
  `oxDisDecSec` float DEFAULT NULL,
  `vazaoDecSec` float DEFAULT NULL,
  `dqoDecTerc` float DEFAULT NULL,
  `phDecTerc` float DEFAULT NULL,
  `tempDecTerc` float DEFAULT NULL,
  `solidoDecTerc` float DEFAULT NULL,
  `oxDisDecTerc` float DEFAULT NULL,
  `vazaoDecTerc` float DEFAULT NULL,
  `eficBio` float DEFAULT NULL,
  `eficProc` float DEFAULT NULL,
  `dqoMont` float DEFAULT NULL,
  `phMont` float DEFAULT NULL,
  `tempMont` float DEFAULT NULL,
  `oxMont` float DEFAULT NULL,
  `solidoMont` float DEFAULT NULL,
  `dqoJust` float DEFAULT NULL,
  `phJust` float DEFAULT NULL,
  `tempJust` float DEFAULT NULL,
  `oxJust` float DEFAULT NULL,
  `solidoJust` float DEFAULT NULL,
  `dqoL1` float DEFAULT NULL,
  `phL1` float DEFAULT NULL,
  `tempL1` float DEFAULT NULL,
  `oxL1` float DEFAULT NULL,
  `solidoL1` float DEFAULT NULL,
  `ssL1` float DEFAULT NULL,
  `nitroL1` float DEFAULT NULL,
  `fosfL1` float DEFAULT NULL,
  `relFML1` float DEFAULT NULL,
  `ivlL1` float DEFAULT NULL,
  `prodLodoL1` float DEFAULT NULL,
  `retHidroL1` float DEFAULT NULL,
  `dqoL2` float DEFAULT NULL,
  `phL2` float DEFAULT NULL,
  `oxL2` float DEFAULT NULL,
  `solidoL2` float DEFAULT NULL,
  `ssL2` float DEFAULT NULL,
  `nitroL2` float DEFAULT NULL,
  `fosfL2` float DEFAULT NULL,
  `relFML2` float DEFAULT NULL,
  `ilvL2` float DEFAULT NULL,
  `prodLodoL2` float DEFAULT NULL,
  `retHidroL2` float DEFAULT NULL,
  `analist` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbestacao_ete`
--

LOCK TABLES `tbestacao_ete` WRITE;
/*!40000 ALTER TABLE `tbestacao_ete` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbestacao_ete` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-03 11:24:00
