-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 10:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sobrokom`
--

-- --------------------------------------------------------

--
-- Table structure for table `billing_infos`
--

CREATE TABLE `billing_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(16) NOT NULL,
  `address_1` varchar(255) NOT NULL,
  `address_2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL,
  `post_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `order_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `billing_infos`
--

INSERT INTO `billing_infos` (`id`, `user_id`, `first_name`, `last_name`, `email`, `phone`, `address_1`, `address_2`, `city`, `division`, `post_code`, `country`, `order_notes`, `created_at`, `updated_at`) VALUES
(7, 17, 'Sadi Al', 'Hossain', 'abm@gmail.com', '01917344267', 'ergrew', NULL, 'asdf', 'dsfa', '4343', 'bangladesh', 'sdfasdf', '2024-02-11 09:07:15', '2024-02-11 09:07:15');

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_name` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `cat_name`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Health', 1, '2024-02-07 21:42:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE `blog_comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subscriber_id` int(11) DEFAULT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `comment` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment_replies`
--

CREATE TABLE `blog_comment_replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subscriber_id` int(11) DEFAULT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL,
  `reply` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `cat_id`, `user_id`, `title`, `desc`, `tags`, `image`, `status`, `created_at`, `updated_at`) VALUES
(2, 2, 15, 'The Unexpected Advantages of Eating Ramen', 'The dish known as ramen, which rose from modest origins to become a worldwide culinary phenomenon, is frequently praised for its delectable flavour and cozy attributes. Nevertheless, ramen has a host of unexpected advantages in addition to being a tasty food. We are thrilled to discuss the benefits of including ramen in your diet as lovers of all things noodle-related.\r\n\r\n1. Adaptability and Handiness \r\nThe adaptability of ramen is one of its best qualities. Ramen is a versatile food that can be enjoyed by anyone, regardless of their preference for a vegan or meat-based broth. It may be customized to satisfy any dietary requirement or craving with the appropriate toppings and components. Furthermore, ramen is the definition of ease. It\'s the ideal dinner for hectic days when time is of the essence but you still yearn for something hearty and filling. It\'s simple to make and adaptable.', 'Nutritious Value ,Health,Ramen', '1559231941.jpg', 0, '2024-02-07 21:47:58', '2024-02-07 21:47:58'),
(3, 2, 15, 'Discover the Hidden Benefits of Frozen Foods', 'It can be difficult to find the time to make wholesome meals every day in the fast-paced world of today. Frozen foods are the unsung hero of the kitchen in this situation. Frozen foods are sometimes misinterpreted, but they have a lot of advantages that can help you live a healthy lifestyle without compromising flavour or quality. Let\'s explore the surprisingly beneficial effects of adding frozen foods to your diet with the help of Sobrokom.store\'s assortment..', 'Health,Frozen Foods', '289430493.png', 0, '2024-02-07 21:58:44', '2024-02-12 22:07:21');

-- --------------------------------------------------------

--
-- Table structure for table `blog_reacts`
--

CREATE TABLE `blog_reacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `like` int(11) NOT NULL DEFAULT 0,
  `dislike` int(11) NOT NULL DEFAULT 0,
  `love` int(11) NOT NULL DEFAULT 0,
  `sad` int(11) NOT NULL DEFAULT 0,
  `angry` int(11) NOT NULL DEFAULT 0,
  `haha` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `BrandName` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `BrandName`, `slug`, `image`, `status`, `created_at`, `updated_at`) VALUES
(25, 'Davidoff', 'davidoff', '607235808.jpg', 1, '2024-02-06 18:17:06', '2024-02-06 18:17:06'),
(26, 'Doux', 'doux', '1142622821.jpg', 1, '2024-02-06 18:17:23', '2024-02-06 18:17:23'),
(27, 'Jodi', 'jodi', '1120727679.jpg', 1, '2024-02-06 18:17:37', '2024-02-06 18:17:37'),
(28, 'Maggi', 'maggi', '1083581156.jpg', 1, '2024-02-06 18:17:50', '2024-02-06 18:17:50'),
(29, 'Nestle', 'nestle', '2024069923.jpg', 1, '2024-02-06 18:18:03', '2024-02-06 18:18:03'),
(30, 'Samayang', 'samayang', '1975027852.png', 1, '2024-02-06 18:18:16', '2024-02-06 18:18:16'),
(31, 'Banvit', 'banvit', '906284021.jpg', 1, '2024-02-07 13:19:30', '2024-02-07 13:19:30'),
(32, 'Seara', 'seara', '1461022094.jpg', 1, '2024-02-07 13:44:15', '2024-02-07 13:44:15'),
(33, 'Local', 'local', '1608125857.jpg', 1, '2024-02-07 14:02:35', '2024-02-07 14:02:35'),
(34, 'American Garden', 'american-garden', '709990787.jpg', 1, '2024-02-07 15:49:15', '2024-02-07 15:49:15'),
(35, 'Imported', 'imported', '774146292.jpg', 1, '2024-02-07 15:58:32', '2024-02-07 15:58:32'),
(36, 'Amul', 'amul', '696696124.jpg', 1, '2024-02-07 16:15:43', '2024-02-07 16:15:43'),
(37, 'Toblerone', 'toblerone', '528424894.jpg', 1, '2024-02-07 16:28:15', '2024-02-07 16:28:15'),
(38, 'Almarai', 'almarai', '331993042.jpg', 1, '2024-02-07 16:40:59', '2024-02-07 16:40:59'),
(39, 'La Vache Quirit', 'la-vache-quirit', '1755876945.jpg', 1, '2024-02-07 17:08:59', '2024-02-07 17:08:59'),
(40, 'Danisa', 'danisa', '1466386443.jpg', 1, '2024-02-07 17:24:36', '2024-02-07 17:24:36'),
(41, 'Kikkoman', 'kikkoman', '760519347.jpg', 1, '2024-02-07 17:49:47', '2024-02-07 17:49:47'),
(42, 'MDH', 'mdh', '2061669406.jpg', 1, '2024-02-08 10:23:45', '2024-02-08 10:23:45'),
(43, 'Lactima', 'lactima', '1882831767.jpg', 1, '2024-02-08 11:02:25', '2024-02-08 11:02:25'),
(44, 'Bibigo', 'bibigo', '409738774.png', 1, '2024-02-08 12:27:49', '2024-02-08 12:27:49'),
(45, 'Davidoff', 'davidoff', '1477474376.jpg', 1, '2024-02-08 14:33:55', '2024-02-08 14:33:55'),
(46, 'CIAO CHURU', 'ciao-churu', '1716767963.jpg', 1, '2024-02-08 18:23:34', '2024-02-08 18:23:34'),
(47, 'Coziecat', 'coziecat', '433207258.jpg', 1, '2024-02-10 14:09:47', '2024-02-10 14:09:47');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryName` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `slug`, `image`, `status`, `created_at`, `updated_at`) VALUES
(25, 'Drink', 'drink', '790285293.jpg', 1, '2024-02-06 18:15:37', '2024-02-06 18:15:37'),
(26, 'Fashion', 'fashion', '258545587.jpg', 1, '2024-02-06 18:15:57', '2024-02-06 18:15:57'),
(28, 'Food', 'food', '965081265.jpg', 1, '2024-02-06 18:16:26', '2024-02-06 18:16:26'),
(29, 'Kitchen Accessories', 'kitchen-accessories', '1307281593.jpg', 1, '2024-02-08 13:38:05', '2024-02-08 13:38:05'),
(30, 'Pet Food', 'pet-food', '1038049185.png', 1, '2024-02-08 18:11:04', '2024-02-08 18:11:04');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `message` varchar(255) NOT NULL,
  `read` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `subject`, `phone`, `message`, `read`, `created_at`, `updated_at`) VALUES
(1, 'Kishor', 'dev.kishor138@gmail.com', 'Please contact me', 1984719041, 'please contact me.', 1, '2024-02-06 19:24:00', '2024-02-06 19:24:00'),
(2, 'Kishor', 'sobrokom.store@gmail.com', 'some query', 1723343865, 'this is test message', 1, '2024-02-08 11:02:43', '2024-02-08 11:02:43');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `coupon_code` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `expiration` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `global_coupons`
--

CREATE TABLE `global_coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `coupon_code` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `startDate` varchar(255) NOT NULL,
  `expiration` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `global_coupons`
--

INSERT INTO `global_coupons` (`id`, `coupon_code`, `discount`, `startDate`, `expiration`, `status`, `created_at`, `updated_at`) VALUES
(1, 'K', '5', '2024-01-01', '2024-01-31', 1, '2024-01-27 22:12:13', '2024-01-27 22:12:13'),
(2, 'M', '10', '2024-01-01', '2024-01-31', 1, '2024-01-27 22:12:13', '2024-01-27 22:12:13'),
(3, 'KM', '15', '2024-02-08', '2024-02-09', 1, '2024-02-06 15:40:06', '2024-02-06 15:40:06');

-- --------------------------------------------------------

--
-- Table structure for table `home_banners`
--

CREATE TABLE `home_banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `short_description` varchar(100) NOT NULL,
  `long_description` varchar(200) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_banners`
--

INSERT INTO `home_banners` (`id`, `title`, `short_description`, `long_description`, `link`, `image`, `status`, `created_at`, `updated_at`) VALUES
(3, 'Slurp-worthy Sensations', 'Dive into Our Ramen and Noodle Extravaganza!', 'Craft Your Own Ramen Adventure. Start with Our Handpicked Ingredients', 'http://sobrokom.store/category/grocery', '980310129.png', 1, '2024-01-16 21:46:17', '2024-02-10 01:02:46'),
(4, 'Purr-fect Selections Await', 'Explore Our Range of Feline Feasts!', 'Satisfy Their Every Whisker. Browse Our Assortment of Wet, Dry, and Treats', 'http://sobrokom.store/category/electronics', '1754895935.png', 1, '2024-01-29 22:03:28', '2024-02-10 00:06:58'),
(5, 'Cold Comfort', 'Elevate Your Meals with Our Premium Frozen Selections', 'Cool Cuisine for Every Craving. Find Your Frozen Food Fix Here.', 'http://sobrokom.store/category/fashion', '730650185.png', 1, '2024-01-29 22:06:36', '2024-02-10 00:21:13');

-- --------------------------------------------------------

--
-- Table structure for table `image_galleries`
--

CREATE TABLE `image_galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `banner_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_04_090014_create_categories_table', 1),
(6, '2024_01_08_112546_create_subcategories_table', 1),
(7, '2024_01_08_183644_create_brands_table', 1),
(8, '2024_01_09_082933_create_popup_messages_table', 1),
(9, '2024_01_10_054755_create_tag_names_table', 2),
(10, '2024_01_10_084208_create_home_banners_table', 3),
(11, '2024_01_10_091853_create_image_galleries_table', 4),
(12, '2024_01_11_050430_create_products_table', 5),
(13, '2024_01_11_051806_create_variants_table', 5),
(14, '2024_01_11_052618_create_product_galleries_table', 5),
(15, '2024_01_11_053124_create_coupons_table', 5),
(16, '2024_01_11_085029_create_offer_banners_table', 5),
(17, '2024_01_14_070739_create_subscribes_table', 6),
(19, '2024_01_17_065344_create_wish_lists_table', 7),
(21, '2024_01_17_180208_create_billing_infos_table', 9),
(23, '2024_01_28_040127_create_global_coupons_table', 10),
(24, '2024_01_30_080121_create_o_t_p_data_table', 11),
(25, '2024_01_30_050042_create_orders_table', 12),
(26, '2024_01_30_052443_create_order_details_table', 12),
(27, '2024_01_30_053011_create_order_billing_details_table', 12),
(28, '2024_02_04_172813_create_contact_us_table', 13),
(29, '2024_02_05_043650_create_blog_categories_table', 13),
(30, '2024_02_05_091501_create_blog_posts_table', 13),
(31, '2024_02_06_083633_create_blog_comments_table', 14),
(32, '2024_02_06_042159_create_review_ratings_table', 15),
(33, '2024_02_06_073418_create_review_images_table', 15),
(34, '2024_02_11_054654_create_sub_subcategories_table', 16),
(35, '2024_02_08_093333_create_blog_comment_replies_table', 17),
(36, '2024_02_11_085348_create_blog_reacts_table', 18);

-- --------------------------------------------------------

--
-- Table structure for table `offer_banners`
--

CREATE TABLE `offer_banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `head` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `short_description` varchar(100) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `offer_banners`
--

INSERT INTO `offer_banners` (`id`, `head`, `title`, `short_description`, `link`, `image`, `status`, `created_at`, `updated_at`) VALUES
(3, 'THE SALAD', 'Fresh & Natural Healthy Food Special Offer', 'Do not miss the current offers of us!', 'https://portfolio-2-0-seven-gamma.vercel.app/', '1152204769.jpg', 1, '2024-01-21 01:03:24', '2024-01-21 01:03:24');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_number` bigint(20) NOT NULL,
  `user_identity` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `product_total` double(8,2) NOT NULL,
  `coupon_id` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `sub_total` double(8,2) NOT NULL,
  `shipping_method` varchar(255) DEFAULT NULL,
  `shipping_amount` double(8,2) DEFAULT NULL,
  `grand_total` double(8,2) NOT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `order_note` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `invoice_number`, `user_identity`, `product_quantity`, `product_total`, `coupon_id`, `discount`, `sub_total`, `shipping_method`, `shipping_amount`, `grand_total`, `payment_method`, `payment_id`, `payment_status`, `order_note`, `status`, `created_at`, `updated_at`) VALUES
(26, 351856, '01984719041', '1', 200.00, '3', '15', 280.00, 'In Dhaka', 80.00, 280.00, 'Cash on Delivery', NULL, NULL, NULL, 'approve', '2024-02-06 19:05:03', '2024-02-06 19:05:46'),
(27, 304953, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:24:17', '2024-02-07 22:24:17'),
(28, 875883, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:26:23', '2024-02-07 22:26:23'),
(29, 220917, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:26:39', '2024-02-07 22:26:39'),
(30, 459617, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(31, 499717, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(32, 499066, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(33, 575270, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(34, 936333, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(35, 858797, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(36, 491526, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:43', '2024-02-07 22:27:43'),
(37, 655004, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:44', '2024-02-07 22:27:44'),
(38, 284123, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:48', '2024-02-07 22:27:48'),
(39, 232097, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:48', '2024-02-07 22:27:48'),
(40, 682964, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:48', '2024-02-07 22:27:48'),
(41, 172472, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:49', '2024-02-07 22:27:49'),
(42, 991814, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:51', '2024-02-07 22:27:51'),
(43, 727606, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:52', '2024-02-07 22:27:52'),
(44, 659347, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:54', '2024-02-07 22:27:54'),
(45, 960054, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:54', '2024-02-07 22:27:54'),
(46, 986425, '01984719041', '14', 3190.00, '3', '15', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:27:55', '2024-02-07 22:27:55'),
(47, 439297, '01742735416', '3', 550.00, '2', '10', 650.00, 'In Dhaka', 100.00, 650.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:36:29', '2024-02-07 22:36:29'),
(48, 346833, '01984719041', '14', 3190.00, '0', '0', 3470.00, 'In Dhaka', 280.00, 3470.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(49, 194838, '01984719041', '5', 1750.00, '0', '0', 1890.00, 'In Dhaka', 140.00, 1890.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:23:33', '2024-02-08 08:23:33'),
(50, 778666, '01984719041', '5', 1750.00, '0', '0', 1890.00, 'In Dhaka', 140.00, 1890.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:23:58', '2024-02-08 08:23:58'),
(51, 325405, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:24:32', '2024-02-08 08:24:32'),
(52, 222125, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:24:37', '2024-02-08 08:24:37'),
(53, 750377, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:24:40', '2024-02-08 08:24:40'),
(54, 931233, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:24:46', '2024-02-08 08:24:46'),
(55, 799913, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:24:59', '2024-02-08 08:24:59'),
(56, 512358, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:25:00', '2024-02-08 08:25:00'),
(57, 776139, '01580581992', '3', 760.00, '0', '0', 860.00, 'In Dhaka', 100.00, 860.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:25:02', '2024-02-08 08:25:02'),
(58, 458301, '01984719041', '5', 1750.00, '0', '0', 1890.00, 'In Dhaka', 140.00, 1890.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(59, 158004, '01984719041', '2', 360.00, '0', '0', 440.00, 'In Dhaka', 80.00, 440.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-08 14:09:37', '2024-02-08 14:09:37'),
(60, 747519, '15', '2', 600.00, '0', '0', 680.00, 'In Dhaka', 80.00, 680.00, 'Cash on Delivery', NULL, NULL, NULL, 'approve', '2024-02-13 04:54:36', '2024-02-13 05:03:23'),
(61, 982670, '18', '8', 3800.00, '0', '0', 3980.00, 'In Dhaka', 180.00, 3980.00, 'Cash on Delivery', NULL, NULL, NULL, 'completed', '2024-02-13 04:58:39', '2024-02-13 05:03:59'),
(62, 270337, '18', '1', 500.00, '0', '0', 580.00, 'In Dhaka', 80.00, 580.00, 'Cash on Delivery', NULL, NULL, NULL, 'pending', '2024-02-13 05:07:47', '2024-02-13 05:07:47');

-- --------------------------------------------------------

--
-- Table structure for table `order_billing_details`
--

CREATE TABLE `order_billing_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(16) NOT NULL,
  `address_1` varchar(255) NOT NULL,
  `address_2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL,
  `post_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `order_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_billing_details`
--

INSERT INTO `order_billing_details` (`id`, `order_id`, `first_name`, `last_name`, `email`, `phone`, `address_1`, `address_2`, `city`, `division`, `post_code`, `country`, `order_notes`, `created_at`, `updated_at`) VALUES
(5, 26, 'Kishor', 'Mahmud', 'dev.kishor138@gmail.com', '01984719041', 'Banasree, Rampura', NULL, 'Dhaka', 'Dhaka', '1219', 'Bangladesh', NULL, '2024-02-06 19:05:03', '2024-02-06 19:05:03'),
(6, 47, 'jihad', 'shahriar', 'jihad@gmail.com', '01742735416', 'Banasree, Rampura, Dhaka', NULL, 'Dhaka', 'Dhaka', '1219', 'Bangladesh', NULL, '2024-02-07 22:36:29', '2024-02-07 22:36:29'),
(7, 48, 'Md. Ehaoteshamul Islam', 'Kisor', 'topfazil999@gmail.com', '01984719041', 'dsfdsf', NULL, 'dhaka', 'dhaka', '890', 'Bangladesh', NULL, '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(8, 58, 'Kishor', NULL, NULL, '01984719041', 'Banasree', NULL, 'Dhaka', 'Dhaka', '1219', 'Bangladesh', NULL, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(9, 59, 'Kishor', NULL, 'sobrokom.store@gmail.com', '01984719041', 'banasree', NULL, 'Dhaka', 'Dhaka', '1219', 'Bangladesh', NULL, '2024-02-08 14:09:37', '2024-02-08 14:09:37'),
(10, 60, 'kishor', 'mahmud', 'mahmudkishor9@gmail.com', '01984719041', 'Banasree, Rampura Dhaka', NULL, 'Dahaka', 'Dhaka', '1219', 'Bangladesh', NULL, '2024-02-13 04:54:36', '2024-02-13 04:54:36'),
(11, 61, 'gdasf', NULL, NULL, '01984719041', 'sdsfsdf', NULL, 'sdfsdfsdf', 'sdfsdf', 'sdfsfsdf', 'Bangladesh', NULL, '2024-02-13 04:58:39', '2024-02-13 04:58:39'),
(12, 62, 'Kishor', NULL, NULL, '01984719041', 'Hello', NULL, 'Hello', 'Hello', 'Hello', 'Bangladesh', NULL, '2024-02-13 05:07:47', '2024-02-13 05:07:47');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `weight` varchar(250) NOT NULL,
  `product_price` double(8,2) NOT NULL,
  `total_price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `product_quantity`, `weight`, `product_price`, `total_price`, `created_at`, `updated_at`) VALUES
(51, 26, '97', '1', '250', 200.00, 200.00, '2024-02-06 19:05:03', '2024-02-06 19:05:03'),
(52, 47, '101', '2', '1', 190.00, 190.00, '2024-02-07 22:36:29', '2024-02-07 22:36:29'),
(53, 47, '99', '1', '1', 170.00, 170.00, '2024-02-07 22:36:29', '2024-02-07 22:36:29'),
(54, 48, '102', '7', '1', 170.00, 170.00, '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(55, 48, '104', '1', '1', 400.00, 400.00, '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(56, 48, '105', '1', '1', 350.00, 350.00, '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(57, 48, '106', '5', '500', 250.00, 250.00, '2024-02-07 22:39:03', '2024-02-07 22:39:03'),
(58, 58, '105', '1', '1', 350.00, 350.00, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(59, 58, '106', '1', '500', 250.00, 250.00, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(60, 58, '103', '1', '1', 500.00, 500.00, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(61, 58, '115', '1', '1', 250.00, 250.00, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(62, 58, '114', '1', '1', 400.00, 400.00, '2024-02-08 08:33:11', '2024-02-08 08:33:11'),
(63, 59, '101', '1', '1', 190.00, 190.00, '2024-02-08 14:09:37', '2024-02-08 14:09:37'),
(64, 59, '102', '1', '1', 170.00, 170.00, '2024-02-08 14:09:37', '2024-02-08 14:09:37'),
(65, 60, '105', '1', '1', 350.00, 350.00, '2024-02-13 04:54:36', '2024-02-13 04:54:36'),
(66, 60, '106', '1', '500', 250.00, 250.00, '2024-02-13 04:54:36', '2024-02-13 04:54:36'),
(67, 61, '108', '2', '500', 300.00, 300.00, '2024-02-13 04:58:39', '2024-02-13 04:58:39'),
(68, 61, '109', '2', '1', 600.00, 600.00, '2024-02-13 04:58:39', '2024-02-13 04:58:39'),
(69, 61, '103', '4', '1', 500.00, 500.00, '2024-02-13 04:58:39', '2024-02-13 04:58:39'),
(70, 62, '103', '1', '1', 500.00, 500.00, '2024-02-13 05:07:47', '2024-02-13 05:07:47');

-- --------------------------------------------------------

--
-- Table structure for table `o_t_p_data`
--

CREATE TABLE `o_t_p_data` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL,
  `expire_at` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `o_t_p_data`
--

INSERT INTO `o_t_p_data` (`id`, `phone`, `otp`, `expire_at`, `created_at`, `updated_at`) VALUES
(32, '01984719041', '107090', '2024-02-06 14:09:45', '2024-02-06 19:04:45', '2024-02-06 19:04:45'),
(33, '01839777934', '122479', '2024-02-07 14:10:22', '2024-02-07 19:05:22', '2024-02-07 19:05:22'),
(34, '01984719041', '114754', '2024-02-07 17:28:35', '2024-02-07 22:23:35', '2024-02-07 22:23:35'),
(35, '01742735416', '109219', '2024-02-07 17:41:08', '2024-02-07 22:36:08', '2024-02-07 22:36:08'),
(36, '01984719041', '109090', '2024-02-07 17:43:38', '2024-02-07 22:38:38', '2024-02-07 22:38:38'),
(37, '01984719041', '108292', '2024-02-08 03:27:24', '2024-02-08 08:22:24', '2024-02-08 08:22:24'),
(38, '01580581792', '117185', '2024-02-08 03:27:54', '2024-02-08 08:22:54', '2024-02-08 08:22:54'),
(39, '01580581992', '119128', '2024-02-08 03:29:15', '2024-02-08 08:24:15', '2024-02-08 08:24:15'),
(40, '01984719041', '120086', '2024-02-08 03:37:53', '2024-02-08 08:32:53', '2024-02-08 08:32:53'),
(41, '01984719041', '102974', '2024-02-08 09:14:08', '2024-02-08 14:09:08', '2024-02-08 14:09:08'),
(42, '01917344267', '114342', '2024-02-08 09:54:51', '2024-02-08 14:49:51', '2024-02-08 14:49:51'),
(43, '01917344267', '109033', '2024-02-08 09:54:51', '2024-02-08 14:49:51', '2024-02-08 14:49:51'),
(44, '01984719041', '117849', '2024-02-13 10:59:10', '2024-02-13 04:54:10', '2024-02-13 04:54:10'),
(45, '01984719041', '104671', '2024-02-13 11:12:22', '2024-02-13 05:07:22', '2024-02-13 05:07:22'),
(46, 'ssdf', '102014', '2024-02-14 03:40:26', '2024-02-13 21:35:26', '2024-02-13 21:35:26'),
(47, 'sdfds', '102278', '2024-02-14 03:45:12', '2024-02-13 21:40:12', '2024-02-13 21:40:12');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `popup_messages`
--

CREATE TABLE `popup_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `subcategory_id` bigint(20) UNSIGNED NOT NULL,
  `sub_subcategory_id` int(11) DEFAULT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `product_feature` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `slug` varchar(200) NOT NULL,
  `short_desc` varchar(255) NOT NULL,
  `long_desc` text DEFAULT NULL,
  `product_image` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `tags` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `subcategory_id`, `sub_subcategory_id`, `brand_id`, `product_feature`, `product_name`, `slug`, `short_desc`, `long_desc`, `product_image`, `sku`, `tags`, `status`, `created_at`, `updated_at`) VALUES
(99, 28, 75, 0, 27, 'new-arrival,weekend-deals', 'Jodi Chicken Sausage', 'jodi-chicken-sausage', 'Imported chicken sausage Malaysia', NULL, '125497956.jpg', 'IPVRMDLQGM', 'Chicken sausage,Chicken,Sausage', 1, '2024-02-07 13:13:03', '2024-02-13 02:35:27'),
(101, 28, 75, NULL, 26, 'new-arrival,weekend-deals', 'Doux Chicken sausage', 'doux-chicken-sausage', 'Imported chicken sausage from France', NULL, '819430430.jpg', 'YSI1WZRUZV', 'Imported chicken sausage ,Chicken,Sausage,Chicken sausage', 1, '2024-02-07 13:36:50', '2024-02-07 13:36:50'),
(102, 28, 75, NULL, 32, 'new-arrival,weekend-deals', 'Seara Chicken sausage', 'seara-chicken-sausage', 'Imported chicken sausage from Brazil', NULL, '1837969729.jpg', 'P4MRFBWQEQ', 'Seara,Seara chicken Sausage,Chicken,Sausage,Frozen Food', 1, '2024-02-07 13:50:07', '2024-02-07 13:50:07'),
(103, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Boneless Chicken breast', 'boneless-chicken-breast', 'Halal Boneless Chicken breast', NULL, '2046017926.jpg', 'RM04I9VA5B', 'Boneless Chicken breast,Boneless Chicken breast,Chicken breast,Chicken,Halal,Halal food', 1, '2024-02-07 14:19:07', '2024-02-07 14:19:07'),
(104, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Chicken Drumstick', 'chicken-drumstick', 'Halal Chicken drumstick with skin', NULL, '1164781691.jpg', 'LK53CFGIZN', 'Chicken drumstick with skin,chicken,Drumstick,Halal Chicken,Frozen food,Food', 1, '2024-02-07 14:26:26', '2024-02-07 14:26:26'),
(105, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Chicken Wings', 'chicken-wings', 'Halal Chicken wings with skin', NULL, '424413775.jpg', '2SKS2HBFUQ', 'Halal Chicken wings with skin,Halal,Chicken wings,Frozen Food,Food', 1, '2024-02-07 14:31:29', '2024-02-07 14:31:29'),
(106, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Chicken Meatballs', 'chicken-meatballs', 'Halal Chicken meatballs', NULL, '667492599.jpg', 'Z0VOSHL3Y4', 'Chicken meatballs ,Chicken ,Meatballs ,Frozen Food,Food', 1, '2024-02-07 14:45:47', '2024-02-07 14:45:47'),
(108, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Chicken Nuggets', 'chicken-nuggets', 'Halal and Fresh Chicken Nuggets', NULL, '124607698.jpg', 'F9VG3ESFD9', 'Halal and Fresh Chicken Nuggets ,Fresh Chicken Nuggets ,Chicken Nuggets ,Chicken,Nuggets', 1, '2024-02-07 14:59:33', '2024-02-10 13:53:07'),
(109, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Octopus', 'octopus', 'Raw full Octopus', NULL, '269084245.jpg', 'MMMAXR04F4', 'Raw Octopus ,Sea Food,Octopus ,Frozen Food', 1, '2024-02-07 15:12:35', '2024-02-07 15:12:35'),
(110, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Crab', 'crab', 'Raw full crab', NULL, '401926607.jpg', 'TMI810DV48', 'Raw crab ,Crab ,Sea Food,Frozen Food', 1, '2024-02-07 15:16:44', '2024-02-07 15:16:44'),
(111, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Squid', 'squid', 'Raw full Squid', NULL, '1388669354.jpg', '0091ETGO6G', 'Raw full squid ,Squid ,Sea food,Frozen Food', 1, '2024-02-07 15:21:25', '2024-02-07 15:21:25'),
(112, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Momo Sheets', 'momo-sheets', 'Made with Wheat Flower and Egg', NULL, '1720365845.jpg', 'K9JCUSU6ZM', 'Momo Sheets,Momo,Frozen Food,Food,Yo Momo', 1, '2024-02-07 15:31:18', '2024-02-07 15:31:18'),
(113, 28, 75, NULL, 33, 'new-arrival,weekend-deals', 'Wonthon Sheets', 'wonthon-sheets', 'Made with Wheat Flower and Egg', NULL, '952859793.jpg', 'XINCK4RVMC', 'Made with wheat flower and egg ,Wonthon Sheets,Wonthon,Sheets,Frozen Food,Food', 1, '2024-02-07 15:36:54', '2024-02-07 15:36:54'),
(114, 28, 73, NULL, 34, 'new-arrival,weekend-deals', 'BBQ Sauce', 'bbq-sauce', 'Imported BBQ Sauce  from America', NULL, '1320674588.jpg', 'STE4HXYZV0', 'Imported BBQ Sauce  from America,Imported,BBQ Sauce ,BBQ,Sauce', 1, '2024-02-07 15:56:15', '2024-02-07 15:56:15'),
(115, 28, 76, NULL, 35, 'new-arrival,weekend-deals', 'Sushi Rice', 'sushi-rice', 'Sticky rice for making Sushi and Kimbap', NULL, '1278017117.jpg', 'AWMD5KVV94', 'Sticky rice,rice,Sushi,Sushi Rice,Food,Imported food', 1, '2024-02-07 16:04:50', '2024-02-07 16:04:50'),
(116, 28, 72, NULL, 36, 'new-arrival,weekend-deals', 'Amul Dark Chocolate', 'amul-dark-chocolate', 'Chocolate', NULL, '1265108539.jpg', '8T7N1HCLDA', 'Amul Dark Chocolate,Chocolate,Amul ,Dark Chocolate,Sweet ,Love Chocolate', 1, '2024-02-07 16:19:07', '2024-02-07 16:19:07'),
(117, 28, 72, NULL, 37, 'new-arrival,weekend-deals', 'Toblerone Chocolate', 'toblerone-chocolate', 'Toblerone Chocolate', NULL, '616369288.jpg', '2VDAK9N702', 'Toblerone chocolate ,Chocolate ,Toblerone,Sweet,Love Chocolate,Love', 1, '2024-02-07 16:31:06', '2024-02-07 16:31:06'),
(119, 28, 77, NULL, 38, 'new-arrival,weekend-deals', 'Almarai Cheese Jar', 'almarai-cheese-jar', 'Almarai Spread Cheese', NULL, '1611270762.jpg', 'MWTL55NE9J', 'Almarai Spread Cheese,Cheese,Almarai', 1, '2024-02-07 16:54:26', '2024-02-07 16:54:26'),
(120, 28, 77, NULL, 38, 'new-arrival,weekend-deals', 'Almarai Cheese Triangle', 'almarai-cheese-triangle', 'Almarai Spread cheese', NULL, '575161830.jpg', 'TPXF78NZRV', 'Spread cheese ,Almarai,Cheese,Almarai Cheese Triangle', 1, '2024-02-07 16:58:41', '2024-02-07 16:58:41'),
(121, 28, 78, NULL, 36, 'new-arrival,weekend-deals', 'Amul Butter', 'amul-butter', 'Imported Amul Butter', NULL, '874058157.jpg', 'VHLVJVS8ZM', 'Imported Amul Butter,Amul Butter,Amul,Butter', 1, '2024-02-07 17:03:57', '2024-02-07 17:03:57'),
(122, 28, 77, NULL, 39, 'new-arrival,weekend-deals', 'La vache Cheese Triangle', 'la-vache-cheese-triangle', 'imported La vache Spread cheese', NULL, '508302652.jpg', 'PHYB73MJZD', 'La vache quirit,Cheese,La vache spread cheese,spread cheese', 1, '2024-02-07 17:13:30', '2024-02-07 17:13:30'),
(123, 28, 73, NULL, 41, 'new-arrival,weekend-deals', 'Kikkoman Soya-Sause', 'kikkoman-soya-sause', 'Chinese Kikkoman Soya-Sause', NULL, '1311921040.jpg', '27Z3EL5Q9Z', 'Kikkoman Soya-Sause,Soya-Sause,Kikkoman,Sause', 1, '2024-02-07 17:54:12', '2024-02-07 17:54:12'),
(124, 28, 79, NULL, 42, 'new-arrival,weekend-deals', 'Kashmiri Chili Powder', 'kashmiri-chili-powder', 'Original Red Spicy Chili Powder', NULL, '1614761464.jpg', 'YF5GK5M2J9', 'Original Red Spicy Chili Powder,Chili Powder,Spicy Chili,Red Spicy,Spicy,MDH,Spices', 1, '2024-02-08 10:30:47', '2024-02-08 10:30:47'),
(125, 28, 77, NULL, 43, 'new-arrival,weekend-deals', 'Lactima Slice Cheese', 'lactima-slice-cheese', '12 pcs Slice cheese', NULL, '2034479218.jpg', 'NON6EPZL9J', 'Cheese,Lactima Cheese,Lactima', 1, '2024-02-08 11:08:25', '2024-02-08 11:08:25'),
(126, 28, 73, NULL, 35, 'new-arrival,weekend-deals', 'Thai Cook & Lobster Fish Sauce', 'thai-cook-lobster-fish-sauce', 'Thai Cook & Lobster Fish Sauce for Cooking', NULL, '415796679.jpg', '1G12C2VEY3', 'Fish Sauce,Lobster,Thai Cook,Thai Cook & Lobster Fish Sauce', 1, '2024-02-08 11:35:49', '2024-02-08 11:35:49'),
(127, 28, 80, NULL, 44, 'new-arrival,weekend-deals', 'Bibigo Nori sheet/Seaweed sheet (Korean)', 'bibigo-nori-sheetseaweed-sheet-korean', 'Bibigo Crispy Seaweed sheet for making Kimbap and Sushi Roll.', NULL, '1689058305.jpg', 'GYGWEWOKZO', 'Bibigo Nori sheet,Nori sheet,Seaweed sheet,Sushi Roll,Sushi,Crispy Seaweed shee', 1, '2024-02-08 12:38:37', '2024-02-08 12:38:37'),
(129, 28, 80, NULL, 44, 'new-arrival,weekend-deals', 'Bibigo Nori sheet/Seaweed sheet (Korean) 10 piece', 'bibigo-nori-sheetseaweed-sheet-korean-10-piece', 'Bibigo Crispy Seaweed sheet for Making Kimbap and Sushi roll.', NULL, '620399059.jpg', 'Z2S1Z0W1WN', 'Bibigo Nori sheet,Nori sheet,Seaweed sheet,Sushi Roll,Sushi,Kimbap', 1, '2024-02-08 12:55:31', '2024-02-08 17:24:43'),
(130, 29, 81, NULL, 35, 'feature,new-arrival,best-rate', 'Sushi Roll Maker Mat, Non-stick Natural Bamboo Sushi Mat.', 'sushi-roll-maker-mat-non-stick-natural-bamboo-sushi-mat', 'Non-stick Natural Bamboo Sushi Mat for making Sushi roll.', NULL, '677381485.jpg', 'D2NMULTJMQ', 'Sushi Roll Maker,Roll Maker,Sushi,Bamboo Sushi Mat,Bamboo', 1, '2024-02-08 13:58:49', '2024-02-08 13:58:49'),
(131, 28, 82, NULL, 35, 'feature,trending,best-rate', 'Champion Mushroom Can.(400gm)', 'champion-mushroom-can400gm', 'Preserved button Mushroom (Product of China)', NULL, '2039418816.jpg', 'UFG06JMV23', 'Mushroom Can,Champion,Mushroom,Food', 1, '2024-02-08 14:27:42', '2024-02-08 14:27:42'),
(133, 28, 83, NULL, 45, 'new-arrival,trending,best-rate,top-offers', 'Davidoff Rich Aroma Coffee - 100gm', 'davidoff-rich-aroma-coffee-100gm', 'Davidoff Rich Aroma Instant Coffee Jar.', NULL, '958723758.jpg', '7EWUIJB7ES', 'Coffee,Davidoff Coffee,Rich aroma Coffee', 1, '2024-02-08 14:48:39', '2024-02-08 14:48:39'),
(135, 28, 83, NULL, 45, 'feature,trending,best-rate,top-offers', 'Davidoff Espresso 57 Coffee - 100gm jar.', 'davidoff-espresso-57-coffee-100gm-jar', 'Davidoff espresso 57 instant coffee.', NULL, '716679074.jpg', 'A4J3LD1NAK', 'Coffee,Davidoff espresso,Davidoff espresso 57 Coffee', 1, '2024-02-08 15:25:26', '2024-02-08 15:25:26'),
(136, 28, 83, NULL, 45, 'feature,trending,best-rate,top-offers', 'Davidoff Fine Aroma Coffee -100gm.', 'davidoff-fine-aroma-coffee-100gm', 'Davidoff Fine Aroma Instant Coffee -100gm.', NULL, '999769302.jpg', 'AYPKROIOQM', 'Davidoff Fine Aroma Coffee,Coffee,Fine Aroma', 1, '2024-02-08 15:38:20', '2024-02-08 15:38:20'),
(137, 28, 79, NULL, 35, 'trending,best-rate', 'Lao Gan Ma - Chili Oil - 210gm.', 'lao-gan-ma-chili-oil-210gm', 'Lao Gan Ma - Chinese Chili Oil Sauce. net wet-210gm.', NULL, '1484230127.jpg', '6CORI80UZV', 'Chili Oil Sauce,Lao Gan Ma,Chili Oil', 1, '2024-02-08 16:00:20', '2024-02-08 16:00:20'),
(138, 28, 71, NULL, 40, 'feature,trending,best-rate,top-offers', 'Danisa Traditional Butter Cookies - 454g', 'danisa-traditional-butter-cookies-454g', 'Danisa Traditional Butter Cookies.', NULL, '1501012210.jpg', 'FCKZPSUET0', 'Danisa Traditional Butter Cookies,Butter Cookies,Cookies,Butter', 1, '2024-02-08 16:46:38', '2024-02-08 16:46:38'),
(139, 28, 73, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samyang Buldak Hot Chicken Sauce 200g (Korean)', 'samyang-buldak-hot-chicken-sauce-200g-korean', 'Samyang Buldak Highly Spicy Sauce.', NULL, '919016267.png', 'FTFEJK632O', 'Spicy Red Sauce,Spicy Sauce,Red Sauce,Sauce', 1, '2024-02-08 17:50:13', '2024-02-08 18:16:04'),
(140, 28, 73, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samyang Buldak Hot 2x Spicy flavor Chicken Sauce - 200g (Korean)', 'samyang-buldak-hot-2x-spicy-flavor-chicken-sauce-200g-korean', 'Samyang Buldak Hot 2x Spicy flavor Chicken Sauce.', NULL, '1487488589.png', 'FBIFFJD28E', '2x Spicy,2x Spicy flavor Chicken Sauce, Buldak Hot 2x Spicy,Chicken Sauce', 1, '2024-02-08 18:05:34', '2024-02-08 18:05:34'),
(141, 28, 73, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samyang Buldak Hot Chicken flavor Sauce (Carbonara flavor) 200g.', 'samyang-buldak-hot-chicken-flavor-sauce-carbonara-flavor-200g', 'Korean Samyang Buldak Hot Chicken flavor Sauce (Carbonara flavor).', NULL, '1321536677.png', 'IKUEVLXLLB', 'Samyang Buldak Hot Chicken flavor Sauce (Carbonara flavor), Hot Chicken,Hot Chicken Sauce', 1, '2024-02-08 18:14:25', '2024-02-08 18:14:25'),
(143, 30, 84, NULL, 46, 'feature,new-arrival', 'Ciao Churu Chicken Fillet & Squid (4 pack)', 'ciao-churu-chicken-fillet-squid-4-pack', 'Ciao Churu Chicken Fillet & Squid (4 pack)  Double the protein delight, now', NULL, '1524242432.jpg', '2OPH1XXC2F', 'pet food,cat food,ciao churu,fillet,squid,Chicken Fillet & Squid', 1, '2024-02-08 18:35:37', '2024-02-08 18:35:37'),
(144, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Jjajang Buldak Hot Chicken Flavor Ramen (Family Pack- 5 Packet)', 'jjajang-buldak-hot-chicken-flavor-ramen-family-pack-5-packet', 'Jjajang Buldak Hot Chicken Flavor Ramen, Korean Black Bean Sauce.5 Packs', NULL, '1190946305.png', 'HBJPF8HFUP', 'Ramen,Korean ,Korean Noodles,Hot Chicken ramen,Buldak ramen', 1, '2024-02-08 18:40:25', '2024-02-10 12:58:14'),
(145, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Seafood Party (Family Pack- 5 packet)', 'seafood-party-family-pack-5-packet', 'Seafood Flavor.', NULL, '913006062.png', 'Y0EAWYZFOE', 'Ramen,Seafood Ramen,Hot Ramen,Buldak Ramen', 1, '2024-02-08 18:48:49', '2024-02-08 18:48:49'),
(146, 30, 84, NULL, 46, 'new-arrival,best-rate', 'Ciao Churu Chicken Fillet in Jelly, 4 Packs -60 gm.', 'ciao-churu-chicken-fillet-in-jelly-4-packs-60-gm', 'Ciao Churu Chicken Fillet in Jelly(4 pack): Classic favorite with a juicy twist.', NULL, '1517672284.jpg', 'PYY42NH7E8', 'Chicken Fillet in Jelly,Ciao Churu Chicken Fillet in Jelly,Ciao Churu ,Chicken Fillet', 1, '2024-02-08 18:52:43', '2024-02-10 15:44:31'),
(147, 30, 84, NULL, 46, 'feature,new-arrival', 'Ciao Churu Grilled Tuna Dried Bonito Flavor, 4 Packs - 48gm.', 'ciao-churu-grilled-tuna-dried-bonito-flavor-4-packs-48gm', 'Ciao Churu Grilled Tuna Dried Bonito Flavor (4 pack): Ocean flavors to tantalize taste buds', NULL, '943435561.jpg', 'O8M3MVB0RC', 'Ciao Churu Grilled Tuna Dried Bonito Flavor,Grilled Tuna Dried Bonito Flavor', 1, '2024-02-08 19:00:53', '2024-02-10 14:15:51'),
(148, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samayang Buldak 3X SPICY HOT Chicken Flavor Ramen, Family Pack (5 Packs) Korean.', 'samayang-buldak-3x-spicy-hot-chicken-flavor-ramen-family-pack-5-packs-korean', 'Much Hotter and 3X spicy Flavor Buldak Ramen.', NULL, '298175114.png', '7C1I34HDQ3', 'Samayang Buldak,3X SPICY,3X SPICY HOT,HOT Chicken Flavor Ramen,3X spicy Flavor,Family Pack,Korean', 1, '2024-02-10 12:55:09', '2024-02-10 12:55:09'),
(149, 28, 70, NULL, 30, 'new-arrival,trending,best-rate,top-offers', 'Samayang Buldak CHEESE HOT Chicken Flavor Ramen, Family Pack (5 Packs) Korean.', 'samayang-buldak-cheese-hot-chicken-flavor-ramen-family-pack-5-packs-korean', 'Samayang Buldak CHEESE Flavor and Hot Chicken Ramen.', NULL, '146945865.png', 'ZJMFZUQQAM', 'HOT Chicken,Samayang, CHEESE, HOT Chicken Flavor Ramen,Family Pack,Korean,Hot Chicken Ramen', 1, '2024-02-10 13:06:54', '2024-02-10 13:06:54'),
(150, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samayang Buldak CARBONARA Flavor Hot Chicken Ramen. Family Pack (5 Packs) Korean.', 'samayang-buldak-carbonara-flavor-hot-chicken-ramen-family-pack-5-packs-korean', 'Samayang Buldak CARBONARA hot Chicken Flavor Ramen.', NULL, '145535806.png', '7WKRKC7YCX', 'Samayang Buldak, CARBONARA Flavor,Hot Chicken Ramen, hot Chicken Flavor', 1, '2024-02-10 14:01:38', '2024-02-10 14:01:38'),
(151, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Samayang Buldak QUATTRO CHEESE HOT Chicken Flavor Ramen, Family Pack - 5 Packs. Korean.', 'samayang-buldak-quattro-cheese-hot-chicken-flavor-ramen-family-pack-5-packs-korean', 'QUATTRO CHEESE HOT Chicken Flavor Ramen.', NULL, '294806158.png', 'C40ZWJDU6A', 'Samayang Buldak,QUATTRO CHEESE,HOT Chicken,Ramen,HOT Chicken Flavor', 1, '2024-02-10 14:29:05', '2024-02-10 14:29:05'),
(152, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Buldak KIMChi  HoT Chicken Flavor Ramen. Family Pack - 5 packs.', 'buldak-kimchi-hot-chicken-flavor-ramen-family-pack-5-packs', 'Kimchi Hot Chicken Flavor Ramen.', NULL, '907591259.png', '59QXGHKZRR', 'Kimchi,Ramen,Hot Chicken,Family Pack,Kimchi Hot Flavor,Buldak', 1, '2024-02-10 14:34:46', '2024-02-10 14:34:46'),
(153, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Ramen KIMChi, Korean KIMChi Flavor. Family Pack - 5 Packs', 'ramen-kimchi-korean-kimchi-flavor-family-pack-5-packs', 'Korean Kimchi Flavor Ramen. Kimchi Flavor.', NULL, '264558116.png', '3ZGCOJI0U1', 'Family Pack,Korean KIMChi Flavor.,Ramen KIMChi,Korean,Kimchi,Kimchi Flavor', 1, '2024-02-10 14:40:18', '2024-02-10 14:40:18'),
(154, 28, 70, NULL, 30, 'feature,trending,best-rate,top-offers', 'Buldak HOT Chicken Flavor Ramen. Family Pack - 5 Packs. Korean.', 'buldak-hot-chicken-flavor-ramen-family-pack-5-packs-korean', 'Buldak HOT Chicken Flavor Ramen.', NULL, '1400454184.png', '9HHUHBOAGY', 'HOT Chicken Flavor Ramen,HOT Chicken,Ramen', 1, '2024-02-10 14:50:01', '2024-02-12 05:05:27'),
(168, 26, 65, 2, 39, 'feature,new-arrival,trending,best-rate,weekend-deals,top-seller,top-offers', 'sdgxd', 'sdgxd', 'xdxdgxdgxdg', NULL, '61499469.png', '1JLBLGO3BX', 'xdgxdg', 1, '2024-02-13 04:21:47', '2024-02-13 04:21:47'),
(169, 25, 62, 0, 25, 'new-arrival', 'asdas', 'asdas', 'asdasd', '<p>asddas</p>', '1677198845.webp', 'SEJS45V4MZ', 'asdsad', 1, '2024-02-14 02:26:38', '2024-02-14 02:26:38'),
(170, 25, 62, 0, 42, 'new-arrival', 'tsefsef', 'tsefsef', 'sdfsdf', '<p>dsfdsff</p>', '1568829969.webp', '49WN5CJSWN', 'dsfsdf', 1, '2024-02-14 02:34:16', '2024-02-14 02:34:16'),
(171, 25, 62, 0, 40, 'new-arrival', 'sadfsadf', 'sadfsadf', 'sdfdsf', '<p>sdfsdf</p>', '1712273493.webp', '50AAAEABQ0', 'sdfsdf', 1, '2024-02-14 02:37:12', '2024-02-14 02:37:12'),
(172, 25, 62, 0, 39, 'new-arrival', '32343', '32343', 'ewrwerwe', '<p>werwerewr</p>', '1721790066.webp', 'METOCRF6GQ', 'werwer', 1, '2024-02-14 02:41:32', '2024-02-14 02:41:32');

-- --------------------------------------------------------

--
-- Table structure for table `product_galleries`
--

CREATE TABLE `product_galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_galleries`
--

INSERT INTO `product_galleries` (`id`, `product_id`, `image`, `created_at`, `updated_at`) VALUES
(155, 99, '934003189.jpg', '2024-02-07 13:13:03', '2024-02-07 13:13:03'),
(157, 101, '796461746.jpg', '2024-02-07 13:36:50', '2024-02-07 13:36:50'),
(158, 102, '1615745677.jpg', '2024-02-07 13:50:07', '2024-02-07 13:50:07'),
(159, 103, '273813811.jpg', '2024-02-07 14:19:07', '2024-02-07 14:19:07'),
(160, 104, '1346873767.jpg', '2024-02-07 14:26:26', '2024-02-07 14:26:26'),
(161, 105, '1892835651.jpg', '2024-02-07 14:31:29', '2024-02-07 14:31:29'),
(162, 106, '2118588549.jpg', '2024-02-07 14:45:47', '2024-02-07 14:45:47'),
(164, 108, '673388804.jpg', '2024-02-07 14:59:33', '2024-02-07 14:59:33'),
(165, 109, '552194917.jpg', '2024-02-07 15:12:35', '2024-02-07 15:12:35'),
(166, 110, '1150247725.jpg', '2024-02-07 15:16:44', '2024-02-07 15:16:44'),
(167, 111, '1338629126.jpg', '2024-02-07 15:21:25', '2024-02-07 15:21:25'),
(168, 112, '595836677.jpg', '2024-02-07 15:31:18', '2024-02-07 15:31:18'),
(169, 113, '407069778.jpg', '2024-02-07 15:36:54', '2024-02-07 15:36:54'),
(170, 114, '1062788175.jpg', '2024-02-07 15:56:15', '2024-02-07 15:56:15'),
(171, 115, '1907250965.jpg', '2024-02-07 16:04:50', '2024-02-07 16:04:50'),
(172, 116, '1675329986.jpg', '2024-02-07 16:19:07', '2024-02-07 16:19:07'),
(173, 117, '579777410.jpg', '2024-02-07 16:31:06', '2024-02-07 16:31:06'),
(175, 119, '1455610926.jpg', '2024-02-07 16:54:26', '2024-02-07 16:54:26'),
(176, 120, '920614484.jpg', '2024-02-07 16:58:41', '2024-02-07 16:58:41'),
(177, 121, '456973174.jpg', '2024-02-07 17:03:57', '2024-02-07 17:03:57'),
(178, 122, '499736504.jpg', '2024-02-07 17:13:30', '2024-02-07 17:13:30'),
(179, 123, '1633642634.jpg', '2024-02-07 17:54:12', '2024-02-07 17:54:12'),
(180, 124, '118729644.jpg', '2024-02-08 10:30:47', '2024-02-08 10:30:47'),
(181, 125, '677405128.jpg', '2024-02-08 11:08:25', '2024-02-08 11:08:25'),
(182, 126, '1236417887.jpg', '2024-02-08 11:35:49', '2024-02-08 11:35:49'),
(183, 127, '1309579612.jpg', '2024-02-08 12:38:37', '2024-02-08 12:38:37'),
(185, 129, '1872536029.jpg', '2024-02-08 12:55:31', '2024-02-08 12:55:31'),
(186, 130, '1923531410.jpg', '2024-02-08 13:58:49', '2024-02-08 13:58:49'),
(187, 131, '802618456.jpg', '2024-02-08 14:27:42', '2024-02-08 14:27:42'),
(189, 133, '1099007694.jpg', '2024-02-08 14:48:39', '2024-02-08 14:48:39'),
(190, 135, '1047586781.jpg', '2024-02-08 15:25:26', '2024-02-08 15:25:26'),
(191, 136, '588259000.jpg', '2024-02-08 15:38:20', '2024-02-08 15:38:20'),
(192, 137, '2052644787.jpg', '2024-02-08 16:00:20', '2024-02-08 16:00:20'),
(193, 138, '148433902.jpg', '2024-02-08 16:46:38', '2024-02-08 16:46:38'),
(194, 139, '210397309.png', '2024-02-08 17:50:13', '2024-02-08 17:50:13'),
(195, 140, '95176775.png', '2024-02-08 18:05:34', '2024-02-08 18:05:34'),
(196, 141, '691362346.png', '2024-02-08 18:14:25', '2024-02-08 18:14:25'),
(197, 143, '302990574.jpg', '2024-02-08 18:35:37', '2024-02-08 18:35:37'),
(198, 144, '1133124824.png', '2024-02-08 18:40:25', '2024-02-08 18:40:25'),
(199, 145, '1423745264.png', '2024-02-08 18:48:49', '2024-02-08 18:48:49'),
(200, 147, '31278866.jpg', '2024-02-08 19:00:53', '2024-02-08 19:00:53'),
(201, 148, '1429349780.png', '2024-02-10 12:55:09', '2024-02-10 12:55:09'),
(202, 149, '868498976.png', '2024-02-10 13:06:54', '2024-02-10 13:06:54'),
(203, 150, '1249479572.png', '2024-02-10 14:01:38', '2024-02-10 14:01:38'),
(204, 151, '1496197061.png', '2024-02-10 14:29:05', '2024-02-10 14:29:05'),
(205, 152, '1198234775.png', '2024-02-10 14:34:46', '2024-02-10 14:34:46'),
(206, 153, '428636926.png', '2024-02-10 14:40:18', '2024-02-10 14:40:18'),
(207, 154, '932800706.png', '2024-02-10 14:50:01', '2024-02-10 14:50:01'),
(221, 168, '1449987698.png', '2024-02-13 04:21:47', '2024-02-13 04:21:47'),
(222, 170, '543998327.webp', '2024-02-14 02:34:16', '2024-02-14 02:34:16'),
(223, 171, '1074684113.webp', '2024-02-14 02:37:12', '2024-02-14 02:37:12'),
(224, 172, '1596235162.webp', '2024-02-14 02:41:32', '2024-02-14 02:41:32');

-- --------------------------------------------------------

--
-- Table structure for table `review_images`
--

CREATE TABLE `review_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `review_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `review_images`
--

INSERT INTO `review_images` (`id`, `review_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, '1913681818.png', '2024-02-13 05:09:32', '2024-02-13 05:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `review_ratings`
--

CREATE TABLE `review_ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `review` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `review_ratings`
--

INSERT INTO `review_ratings` (`id`, `user_id`, `product_id`, `review`, `rating`, `status`, `created_at`, `updated_at`) VALUES
(1, 18, 103, 'onek Valo Product', 5, 0, '2024-02-13 05:09:32', '2024-02-13 05:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL,
  `subcategoryName` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `categoryId`, `subcategoryName`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(62, 25, 'Juice', 'juice', 1, '2024-02-06 18:19:26', '2024-02-06 18:19:26'),
(65, 26, 'Man', 'man', 1, '2024-02-06 18:20:20', '2024-02-06 18:20:20'),
(66, 26, 'Woman', 'woman', 1, '2024-02-06 18:20:27', '2024-02-06 18:20:27'),
(67, 28, 'Dry Nuts', 'dry-nuts', 1, '2024-02-06 18:20:47', '2024-02-06 18:20:47'),
(68, 28, 'Honey', 'honey', 1, '2024-02-06 18:20:58', '2024-02-06 18:20:58'),
(69, 28, 'Noodles', 'noodles', 1, '2024-02-06 18:21:15', '2024-02-06 18:21:15'),
(70, 28, 'Ramen', 'ramen', 1, '2024-02-06 18:21:24', '2024-02-06 18:21:24'),
(71, 28, 'Cookies', 'cookies', 1, '2024-02-06 18:21:36', '2024-02-06 18:21:36'),
(72, 28, 'Chocolates', 'chocolates', 1, '2024-02-06 18:21:45', '2024-02-06 18:21:45'),
(73, 28, 'Sauce', 'sauce', 1, '2024-02-06 18:22:01', '2024-02-06 18:49:42'),
(74, 28, 'Meatballs', 'meatballs', 1, '2024-02-06 18:22:13', '2024-02-06 18:22:13'),
(75, 28, 'Frozen Food', 'frozen-food', 1, '2024-02-07 13:07:51', '2024-02-07 13:07:51'),
(76, 28, 'Rice', 'rice', 1, '2024-02-07 15:43:51', '2024-02-07 15:43:51'),
(77, 28, 'Cheese', 'cheese', 1, '2024-02-07 16:42:38', '2024-02-07 16:42:38'),
(78, 28, 'Butter', 'butter', 1, '2024-02-07 17:01:47', '2024-02-07 17:01:47'),
(79, 28, 'Spices', 'spices', 1, '2024-02-08 09:58:11', '2024-02-08 09:58:11'),
(80, 28, 'Snacks', 'snacks', 1, '2024-02-08 12:30:54', '2024-02-08 12:30:54'),
(81, 29, 'Mat', 'mat', 1, '2024-02-08 13:42:40', '2024-02-08 13:42:40'),
(82, 28, 'Mushroom', 'mushroom', 1, '2024-02-08 14:15:29', '2024-02-08 14:15:29'),
(83, 28, 'Coffee', 'coffee', 1, '2024-02-08 14:32:13', '2024-02-08 14:32:13'),
(84, 30, 'Cat Food', 'cat-food', 1, '2024-02-08 18:24:25', '2024-02-08 18:24:25'),
(85, 28, 'Frozen Food', 'frozen-food', 1, '2024-02-10 15:11:52', '2024-02-10 15:11:52');

-- --------------------------------------------------------

--
-- Table structure for table `subscribes`
--

CREATE TABLE `subscribes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribes`
--

INSERT INTO `subscribes` (`id`, `email`, `status`, `created_at`, `updated_at`) VALUES
(2, 'devkishor@gmail.com', 0, '2024-02-08 11:01:58', '2024-02-08 11:01:58'),
(3, 'user@gmail.com', 0, '2024-02-12 22:11:35', '2024-02-12 22:11:35');

-- --------------------------------------------------------

--
-- Table structure for table `sub_subcategories`
--

CREATE TABLE `sub_subcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subcategoryId` bigint(20) UNSIGNED NOT NULL,
  `subSubcategoryName` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_subcategories`
--

INSERT INTO `sub_subcategories` (`id`, `subcategoryId`, `subSubcategoryName`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(2, 65, 'T-Shirt', 't-shirt', 1, '2024-02-11 00:52:13', '2024-02-11 00:52:13'),
(3, 65, 'Pant', 'pant', 1, '2024-02-11 02:49:24', '2024-02-11 02:49:24');

-- --------------------------------------------------------

--
-- Table structure for table `tag_names`
--

CREATE TABLE `tag_names` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tagName` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `socialId` text DEFAULT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `pic` text DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `present_address` varchar(100) DEFAULT NULL,
  `permanent_address` varchar(100) DEFAULT NULL,
  `role` enum('superadmin','admin','user') DEFAULT 'user',
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `socialId`, `fullName`, `pic`, `phone`, `present_address`, `permanent_address`, `role`, `email`, `email_verified_at`, `password`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'kishor', NULL, NULL, NULL, NULL, '', '', 'admin', 'majid.bd905@gmail.com', NULL, '$2y$12$izBb/gTAf//kq6RBUvG1IOGz/rtcm3yoIOA1IxgzKusv75VIdlpqS', 'Active', NULL, '2024-01-09 21:29:13', '2024-02-04 10:28:27'),
(15, 'sobrokom.store', NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'sobrokom.store@gmail.com', NULL, '$2y$12$b/D3l93B.rorXOvSf7ZmPOEdmse6b4e76UQcJpA09oJ7ILPKowHcO', 'Active', NULL, '2024-02-06 18:03:50', '2024-02-06 18:03:50'),
(16, 'jihad', NULL, NULL, NULL, NULL, NULL, NULL, 'user', 'jihad@gmail.com', NULL, '$2y$12$7n7Zwdt8galMmajAreuOZu5GEh2D30wniisocP.1Lx9BSpGaSSRnS', 'Active', NULL, '2024-02-08 22:23:25', '2024-02-08 22:23:25'),
(17, 'abm', NULL, NULL, NULL, NULL, NULL, NULL, 'user', 'abm905@gmail.com', NULL, '$2y$12$OUEV43oTlbjr/r1ZOHKHGOGryr91tA.9oSHboewOjq6SVL8ktAFaG', 'Active', NULL, '2024-02-11 09:04:52', '2024-02-11 09:04:52'),
(18, 'normaluser', NULL, NULL, NULL, NULL, NULL, NULL, 'user', 'normaluser@gmail.com', NULL, '$2y$12$AMwYAp01piuVZzflacOiYOVYR03uVPXzk.FJofrK7V.AbtGhQ804e', 'Active', NULL, '2024-02-13 04:56:09', '2024-02-13 04:56:09');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `regular_price` double(8,2) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `barcode` varchar(255) DEFAULT NULL,
  `unit` varchar(50) NOT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `expire_date` date DEFAULT NULL,
  `manufacture_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`id`, `product_id`, `color`, `size`, `regular_price`, `discount`, `discount_amount`, `stock_quantity`, `barcode`, `unit`, `weight`, `status`, `expire_date`, `manufacture_date`, `created_at`, `updated_at`) VALUES
(149, 99, NULL, NULL, 170.00, '0', 170, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 13:15:04', '2024-02-07 13:15:04'),
(151, 101, NULL, NULL, 190.00, '0', 190, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 13:37:42', '2024-02-07 13:37:42'),
(152, 102, NULL, NULL, 170.00, '0', 170, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 13:50:36', '2024-02-07 13:50:36'),
(153, 103, NULL, NULL, 500.00, '0', 500, 30, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 14:21:25', '2024-02-07 14:21:25'),
(154, 104, NULL, NULL, 400.00, '0', 400, 20, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 14:27:17', '2024-02-07 14:27:17'),
(155, 105, NULL, NULL, 350.00, '0', 350, 30, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 14:32:24', '2024-02-07 14:32:24'),
(156, 106, NULL, NULL, 250.00, '0', 250, 30, NULL, 'gm', '500', 1, NULL, NULL, '2024-02-07 14:45:53', '2024-02-07 14:45:53'),
(157, 108, NULL, NULL, 300.00, '0', 300, 30, NULL, 'gm', '500', 1, NULL, NULL, '2024-02-07 15:00:01', '2024-02-07 15:00:01'),
(158, 109, NULL, NULL, 600.00, '0', 600, 30, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 15:13:24', '2024-02-07 15:13:24'),
(159, 110, NULL, NULL, 600.00, '0', 600, 30, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 15:17:27', '2024-02-07 15:17:27'),
(160, 111, NULL, NULL, 600.00, '0', 600, 30, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 15:21:53', '2024-02-07 15:21:53'),
(161, 112, NULL, NULL, 60.00, '0', 60, 100, NULL, 'piece', '25', 1, NULL, NULL, '2024-02-07 15:32:10', '2024-02-07 15:32:10'),
(162, 113, NULL, NULL, 60.00, '0', 60, 1000, NULL, 'piece', '25', 1, NULL, NULL, '2024-02-07 15:38:30', '2024-02-07 15:38:30'),
(163, 114, NULL, NULL, 400.00, '0', 400, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 15:56:38', '2024-02-07 15:56:38'),
(164, 115, NULL, NULL, 250.00, '0', 250, 100, NULL, 'kg', '1', 1, NULL, NULL, '2024-02-07 16:05:19', '2024-02-07 16:05:19'),
(165, 116, NULL, NULL, 220.00, '0', 220, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 16:20:12', '2024-02-07 16:20:12'),
(166, 117, NULL, NULL, 220.00, '0', 220, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 16:31:27', '2024-02-07 16:31:27'),
(167, 119, NULL, NULL, 800.00, '0', 800, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 16:55:00', '2024-02-07 16:55:00'),
(168, 120, NULL, NULL, 250.00, '0', 250, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 16:59:53', '2024-02-07 16:59:53'),
(169, 121, NULL, NULL, 250.00, '0', 250, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-07 17:05:02', '2024-02-07 17:05:02'),
(170, 122, NULL, NULL, 250.00, '0', 250, 100, NULL, 'packet', '1', 1, NULL, NULL, '2024-02-07 17:14:17', '2024-02-07 17:14:17'),
(171, 123, NULL, NULL, 350.00, '0', 350, 100, NULL, 'liter', '1', 1, NULL, NULL, '2024-02-07 17:55:27', '2024-02-07 17:55:27'),
(172, 124, NULL, NULL, 250.00, '0', 250, 100, NULL, 'gm', '100', 1, NULL, NULL, '2024-02-08 10:32:32', '2024-02-08 10:32:32'),
(173, 125, NULL, NULL, 350.00, '0', 350, 500, NULL, 'piece', '12', 1, NULL, NULL, '2024-02-08 11:11:30', '2024-02-08 11:11:30'),
(174, 126, NULL, NULL, 250.00, '0', 250, 100, NULL, 'ml', '285', 1, NULL, NULL, '2024-02-08 11:39:32', '2024-02-08 11:39:32'),
(175, 127, NULL, NULL, 150.00, '0', 150, 300, NULL, 'piece', '5', 1, NULL, NULL, '2024-02-08 12:41:19', '2024-02-08 12:41:19'),
(176, 127, NULL, NULL, 250.00, '0', 250, 300, NULL, 'piece', '10', 1, NULL, NULL, '2024-02-08 12:41:52', '2024-02-08 12:41:52'),
(177, 129, NULL, NULL, 250.00, '0', 250, 300, NULL, 'piece', '10', 1, NULL, NULL, '2024-02-08 12:55:50', '2024-02-08 12:55:50'),
(178, 130, NULL, NULL, 250.00, '0', 250, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 13:59:25', '2024-02-08 13:59:25'),
(179, 131, NULL, NULL, 120.00, '0', 120, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 14:28:37', '2024-02-08 14:28:37'),
(181, 133, NULL, NULL, 780.00, '10', 702, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 14:58:56', '2024-02-08 14:58:56'),
(183, 135, NULL, NULL, 780.00, '10', 702, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 15:26:21', '2024-02-08 15:26:21'),
(184, 135, NULL, NULL, 780.00, '10', 702, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 15:26:33', '2024-02-08 15:26:33'),
(185, 136, NULL, NULL, 780.00, '10', 702, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 15:38:47', '2024-02-08 15:38:47'),
(186, 137, NULL, NULL, 650.00, '20', 520, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 16:03:58', '2024-02-08 16:03:58'),
(187, 138, NULL, NULL, 850.00, '10', 765, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 16:50:16', '2024-02-08 16:50:16'),
(189, 139, NULL, NULL, 550.00, '10', 495, 100, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 17:52:53', '2024-02-08 17:52:53'),
(190, 140, NULL, NULL, 550.00, '10', 495, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 18:06:04', '2024-02-08 18:06:04'),
(191, 141, NULL, NULL, 550.00, '10', 495, 50, NULL, 'piece', '1', 1, NULL, NULL, '2024-02-08 18:14:49', '2024-02-08 18:14:49'),
(193, 143, NULL, NULL, 220.00, '0', 220, 10, NULL, 'gm', '56', 1, NULL, NULL, '2024-02-08 18:42:56', '2024-02-08 18:42:56'),
(194, 145, NULL, NULL, 750.00, '10', 675, 50, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-08 18:49:47', '2024-02-08 18:49:47'),
(195, 144, NULL, NULL, 750.00, '10', 675, 50, NULL, 'piece', '5', 1, NULL, NULL, '2024-02-08 18:52:21', '2024-02-08 18:52:21'),
(198, 148, NULL, NULL, 750.00, '10', 675, 100, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 12:56:09', '2024-02-10 12:56:09'),
(199, 149, NULL, NULL, 750.00, '10', 675, 100, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 13:07:25', '2024-02-10 13:07:25'),
(200, 150, NULL, NULL, 750.00, '10', 675, 100, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 14:02:06', '2024-02-10 14:02:06'),
(201, 147, NULL, NULL, 265.00, '10', 239, 50, NULL, 'piece', '4', 1, NULL, NULL, '2024-02-10 14:16:07', '2024-02-10 14:16:07'),
(202, 146, NULL, NULL, 265.00, '10', 239, 50, NULL, 'piece', '4', 1, NULL, NULL, '2024-02-10 14:19:29', '2024-02-10 14:19:29'),
(203, 151, NULL, NULL, 750.00, '10', 675, 50, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 14:29:28', '2024-02-10 14:29:28'),
(204, 152, NULL, NULL, 750.00, '10', 675, 50, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 14:35:08', '2024-02-10 14:35:08'),
(205, 153, NULL, NULL, 750.00, '10', 675, 50, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 14:40:39', '2024-02-10 14:40:39'),
(206, 154, NULL, NULL, 750.00, '10', 675, 50, NULL, 'packet', '5', 1, NULL, NULL, '2024-02-10 14:50:21', '2024-02-10 14:50:21'),
(241, 171, 'red', 'M', 200.00, '10', 180, 45, NULL, 'liter', '45', 1, NULL, NULL, '2024-02-14 02:37:52', '2024-02-14 02:37:52'),
(242, 172, 'red', 'M', 120.00, '25', 90, 250, NULL, 'liter', '1', 1, NULL, NULL, '2024-02-14 02:41:56', '2024-02-14 02:44:18'),
(243, 170, 'blue', 'M', 200.00, '10', 180, 56, NULL, 'liter', '56', 1, '2024-06-20', '2023-11-08', '2024-02-14 02:56:52', '2024-02-14 02:56:52');

-- --------------------------------------------------------

--
-- Table structure for table `wish_lists`
--

CREATE TABLE `wish_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `loved` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billing_infos`
--
ALTER TABLE `billing_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `billing_infos_user_id_foreign` (`user_id`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comments_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comment_replies_comment_id_foreign` (`comment_id`);

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_posts_cat_id_foreign` (`cat_id`);

--
-- Indexes for table `blog_reacts`
--
ALTER TABLE `blog_reacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_reacts_user_id_foreign` (`user_id`),
  ADD KEY `blog_reacts_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_coupon_code_unique` (`coupon_code`),
  ADD KEY `coupons_product_id_foreign` (`product_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `global_coupons`
--
ALTER TABLE `global_coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_banners`
--
ALTER TABLE `home_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_galleries`
--
ALTER TABLE `image_galleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `image_galleries_banner_id_foreign` (`banner_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offer_banners`
--
ALTER TABLE `offer_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_billing_details`
--
ALTER TABLE `order_billing_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_billing_details_order_id_foreign` (`order_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`);

--
-- Indexes for table `o_t_p_data`
--
ALTER TABLE `o_t_p_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `popup_messages`
--
ALTER TABLE `popup_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_subcategory_id_foreign` (`subcategory_id`),
  ADD KEY `products_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `product_galleries`
--
ALTER TABLE `product_galleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_galleries_product_id_foreign` (`product_id`);

--
-- Indexes for table `review_images`
--
ALTER TABLE `review_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_images_review_id_foreign` (`review_id`);

--
-- Indexes for table `review_ratings`
--
ALTER TABLE `review_ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_ratings_user_id_foreign` (`user_id`),
  ADD KEY `review_ratings_product_id_foreign` (`product_id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subcategories_categoryid_foreign` (`categoryId`);

--
-- Indexes for table `subscribes`
--
ALTER TABLE `subscribes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subscribes_email_unique` (`email`);

--
-- Indexes for table `sub_subcategories`
--
ALTER TABLE `sub_subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_subcategories_subcategoryid_foreign` (`subcategoryId`);

--
-- Indexes for table `tag_names`
--
ALTER TABLE `tag_names`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variants_product_id_foreign` (`product_id`);

--
-- Indexes for table `wish_lists`
--
ALTER TABLE `wish_lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wish_lists_user_id_foreign` (`user_id`),
  ADD KEY `wish_lists_product_id_foreign` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billing_infos`
--
ALTER TABLE `billing_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_reacts`
--
ALTER TABLE `blog_reacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `global_coupons`
--
ALTER TABLE `global_coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `home_banners`
--
ALTER TABLE `home_banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `image_galleries`
--
ALTER TABLE `image_galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `offer_banners`
--
ALTER TABLE `offer_banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `order_billing_details`
--
ALTER TABLE `order_billing_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `o_t_p_data`
--
ALTER TABLE `o_t_p_data`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `popup_messages`
--
ALTER TABLE `popup_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `product_galleries`
--
ALTER TABLE `product_galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT for table `review_images`
--
ALTER TABLE `review_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `review_ratings`
--
ALTER TABLE `review_ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `subscribes`
--
ALTER TABLE `subscribes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_subcategories`
--
ALTER TABLE `sub_subcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tag_names`
--
ALTER TABLE `tag_names`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;

--
-- AUTO_INCREMENT for table `wish_lists`
--
ALTER TABLE `wish_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `billing_infos`
--
ALTER TABLE `billing_infos`
  ADD CONSTRAINT `billing_infos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD CONSTRAINT `blog_comments_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD CONSTRAINT `blog_comment_replies_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD CONSTRAINT `blog_posts_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `blog_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blog_reacts`
--
ALTER TABLE `blog_reacts`
  ADD CONSTRAINT `blog_reacts_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_reacts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `coupons`
--
ALTER TABLE `coupons`
  ADD CONSTRAINT `coupons_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `image_galleries`
--
ALTER TABLE `image_galleries`
  ADD CONSTRAINT `image_galleries_banner_id_foreign` FOREIGN KEY (`banner_id`) REFERENCES `home_banners` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_billing_details`
--
ALTER TABLE `order_billing_details`
  ADD CONSTRAINT `order_billing_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_subcategory_id_foreign` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_galleries`
--
ALTER TABLE `product_galleries`
  ADD CONSTRAINT `product_galleries_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_categoryid_foreign` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_subcategories`
--
ALTER TABLE `sub_subcategories`
  ADD CONSTRAINT `sub_subcategories_subcategoryid_foreign` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `wish_lists`
--
ALTER TABLE `wish_lists`
  ADD CONSTRAINT `wish_lists_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `wish_lists_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
