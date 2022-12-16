<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag ()
    {
      dataLayer.push( arguments );
    }

    gtag( "js", new Date() );

    gtag( "config", "UA-XXXXXX-X" );
  </script>

  <meta charset="<?php bloginfo( 'charset' ); ?>"/>

  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

  <!-- Disable tap highlight on IE -->
  <meta name="msapplication-tap-highlight" content="no"/>

  <!-- Web Application Manifest -->
  <link rel="manifest" href="<?php echo BUGLOOS_THEME_URI; ?>/assets/manifest.json"/>

  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes"/>
  <meta name="application-name" content="Bugloos.nl"/>

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="apple-mobile-web-app-title" content="Bugloos.nl"/>

  <!-- Tile icon for Win8 (144x144 + tile color) -->
  <meta name="msapplication-TileImage" content="mstile-150x150.png"/>
  <meta name="msapplication-TileColor" content="#3c3ce5"/>

  <!-- Color the status bar on mobile devices -->
  <meta name="theme-color" content="#ffffff"/>

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php echo ! is_home() ? 'style="overflow-y: scroll"' : ''; ?>>
  <?php wp_body_open(); ?>
