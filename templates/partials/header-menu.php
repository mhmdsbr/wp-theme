<header class="c-header no-gutters u-flex justify-content-center align-items-center">
  <div class="c-header__col o-logo no-gutters u-flex--center col-3">
    <a class="o-logo__link" href="<?php echo esc_url( home_url() ); ?>">
      <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/header-logo.svg" alt="Bugloos Logo"/> </a>
  </div>
  <nav aria-label="primary-menu" class="c-header__col u-flex--center o-p--nav col-6">
    <div class="u-nav__slider-icon">
      <svg width="41" height="10" viewBox="0 0 41 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2083 0.324707H0.208252V3.01302H40.2083V0.324707ZM35.5329 6.98703H4.88357V9.67534H35.5329V6.98703Z" fill="#A7A7A7"/>
      </svg>
    </div>
    <div class="nav-menu__items menu-hide">
      <?php
      if ( has_nav_menu( 'primary-menu' ) )
      {
        ?>
        <nav aria-label="inner-menu">
          <?php
          wp_nav_menu( [
            'menu'            => 'primary-menu',
            'theme_location'  => 'primary-menu',
            'container'       => false,
            'container_id'    => '',
            'container_class' => '',
            'menu_class'      => '',
            'depth'           => 1
          ] );
          ?>
          <div class="lang-mobile">
            <h5><?php _e( 'Language', 'bugloos' ); ?></h5>
            <div class="wrapper">
              <a class="EN" href="#">EN</a> <a class="NL" href="#">NL</a>
            </div>
          </div>
        </nav>
        <?php
      }
      ?>
    </div>
  </nav>
  <?php
  if ( has_nav_menu( 'secondary-menu' ) )
  {
    ?>
    <nav aria-label="secondary-menu" class="c-header__col u-flex--center o-s--nav col-2">
      <div class="u-nav__secondary-items">
        <?php
        wp_nav_menu( [
          'menu'            => 'secondary-menu',
          'theme_location'  => 'secondary-menu',
          'container'       => false,
          'container_id'    => '',
          'container_class' => '',
          'menu_class'      => '',
          'depth'           => 1
        ] );
        ?>
      </div>
    </nav>
    <?php
  }
  ?>
  <div class="c-header__col u-lang-swticher no-gutters col-1">
    <ul>
      <li>EN</li>
      <li>NL</li>
    </ul>
  </div>
</header>
