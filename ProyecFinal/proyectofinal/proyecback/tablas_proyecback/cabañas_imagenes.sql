-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-01-2021 a las 18:42:35
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cabañas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabañas_imagenes`
--

CREATE TABLE `cabañas_imagenes` (
  `idCabañas_imagenes` int(11) NOT NULL,
  `idCabañas` int(11) NOT NULL,
  `uid` varchar(45) COLLATE utf8_spanish2_ci NOT NULL COMMENT 'Uid referencia de imagen',
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabañas_imagenes`
--
ALTER TABLE `cabañas_imagenes`
  ADD PRIMARY KEY (`idCabañas_imagenes`),
  ADD KEY `idCabañas` (`idCabañas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cabañas_imagenes`
--
ALTER TABLE `cabañas_imagenes`
  MODIFY `idCabañas_imagenes` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cabañas_imagenes`
--
ALTER TABLE `cabañas_imagenes`
  ADD CONSTRAINT `cabañas_imagenes_ibfk_1` FOREIGN KEY (`idCabañas`) REFERENCES `cabañas` (`idCabañas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
