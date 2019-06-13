-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 01 May 2018, 17:55:34
-- Sunucu sürümü: 5.6.35
-- PHP Sürümü: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Veritabanı: `gumushane`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `symposion`
--

CREATE TABLE `symposion` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `university` varchar(200) NOT NULL,
  `section` varchar(200) NOT NULL,
  `flag` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `symposion`
--

INSERT INTO `symposion` (`id`, `name`, `surname`, `university`, `section`, `flag`) VALUES
(1, 'Kemal', 'BALABAN', 'Trakya Üniversitesi', 'Bilgisayar Mühendisliği', 1);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `symposion`
--
ALTER TABLE `symposion`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `symposion`
--
ALTER TABLE `symposion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;