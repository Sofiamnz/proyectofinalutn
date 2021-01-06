-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-01-2021 a las 00:45:22
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
-- Estructura de tabla para la tabla `cabañas`
--

CREATE TABLE `cabañas` (
  `idCabañas` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `habilitado` tinyint(4) NOT NULL DEFAULT 1,
  `eliminado` tinyint(45) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `cabañas`
--

INSERT INTO `cabañas` (`idCabañas`, `nombre`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Cabaña01', 1, 0, '2021-01-04 17:29:19', '2021-01-04 17:29:19'),
(2, 'Cabaña02', 1, 0, '2021-01-04 17:29:35', '2021-01-04 17:29:35'),
(3, 'Cabaña03', 1, 0, '2021-01-04 17:30:10', '2021-01-04 17:30:10'),
(4, 'Cabaña04', 1, 0, '2021-01-04 17:30:51', '2021-01-04 17:30:51');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabañas`
--
ALTER TABLE `cabañas`
  ADD PRIMARY KEY (`idCabañas`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cabañas`
--
ALTER TABLE `cabañas`
  MODIFY `idCabañas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
