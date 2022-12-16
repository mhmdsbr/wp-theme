<?php
/**
 * The template for blog page
 * @package Bugloos
 *
 * Template Name: Single Staff
 */
get_header();
?>
<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-28' ] );
  ?>
  <section class="c-staff-single u-flex u-flex--column">
    <section id="team">
      <div class="header"><?php the_title(); ?></div>
      <?php
      the_post_thumbnail();
      the_content();
      ?>
    </section>

    <?php
    $tab_items = get_field( 'tab_items' );
    if ( $tab_items )
    {
      ?>
      <section id="tab" class="u-flex u-flex--column">
        <div class="tab-container d-flex flex-row flex-wrap">
          <?php
          $iteration = 1;
          foreach ( $tab_items as $tab_item )
          {
            ?>
            <div class="tab-item d-flex flex-column u-flex--center<?php echo $iteration == 1 ? ' is-selected' : ''; ?>">
              <?php
              $image = $tab_item[ 'image' ];
              if ( $image )
              {
                ?>
                <div class="icon">
                  <img src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>">
                </div>
                <?php
              }
              ?>
              <div class="text">
                <?php echo $tab_item[ 'title' ]; ?>
              </div>
            </div>
            <?php
            $iteration ++;
          }
          ?>
        </div>

        <div class="tab-content-container">
          <?php
          $iteration = 1;
          foreach ( $tab_items as $tab_item )
          {
            ?>
            <div class="tab-content<?php echo $iteration > 1 ? ' d-none' : ''; ?>">
              <?php echo $tab_item[ 'description' ]; ?>
            </div>
            <?php
            $iteration ++;
          }
          ?>
        </div>
      </section>
      <?php
    }

    get_template_part( 'templates/partials/info-box' );

    $slider_items = get_field( 'slider_items' );
    if ( $slider_items )
    {
      ?>
      <section id="slider">
        <div class="header"><?php echo get_field( 'slider_title' ); ?></div>
        <div class="extended-sub-header"><?php echo get_field( 'slider_description' ); ?></div>

        <div class="u-flex u-flex--row u-flex--center c-staff__slider-wrapper">
          <?php
          foreach ( $slider_items as $item )
          {
            ?>
            <div class="u-flex u-flex--column c-staff__slider_items">
              <div class="u-flex u-flex--row c-staff__desc-container">
                <div class="col-3 c-staff__desc">
                  <h4><?php echo $item[ 'title' ]; ?></h4>
                  <?php
                  if ( $item[ 'image' ] )
                  {
                    ?>
                    <div class="c-staff__img">
                      <img src="<?php echo esc_url( $item[ 'image' ][ 'url' ] ); ?>" alt="<?php echo esc_attr( $item[ 'image' ][ 'alt' ] ); ?>"/>
                    </div>
                    <?php
                  }
                  ?>
                </div>
                <p class="col-9 main-content"><?php echo nl2br( $item[ 'description' ] ); ?>/p>
              </div>
            </div>
            <?php
          }
          ?>
        </div>

      </section>
      <?php
    }
    ?>
    <section id="technologies">
      <div class="sub-header"><?php _e( 'Technologies', 'bugloos' ); ?></div>
      <div class="technologies-sub-header"><?php _e( 'What we can deliver:', 'bugloos' ); ?></div>

      <?php
      $technologies = [
        'PHP'           => 'php.svg',
        'Javascript'    => 'js.svg',
        'Python'        => 'phyton.svg',
        'GO'            => 'go.svg',
        'Java'          => 'java.svg',
        'C++'           => 'c++.svg',
        'AWS'           => 'aws.svg',
        'Digital Ocean' => 'digitalOciean.svg',
        'Docker'        => 'docker.svg',
        'Kubernetes'    => 'kubernetes.svg',
        'IOS'           => 'ios.svg',
        'Android'       => 'android.svg',
        'VueJS'         => 'vueJs.svg',
        'AngularJS'     => 'angularJs.svg',
        'ReactJS'       => 'reactJs.svg',
        '.NET'          => 'microsoft.svg',
        'Node.js'       => 'node.svg',
        'Magento'       => 'magento.svg',
        'Spring Cloud'  => 'springCloud.svg',
        'Google Cloud'  => 'googleCloud.svg',
        'SQL'           => 'sql.png'
      ];
      ?>

      <div class="d-flex flex-row flex-wrap tech-container">
        <?php
        foreach ( $technologies as $key => $value )
        {
          ?>
          <div class="tech-box u-flex u-flex--column u-flex--center">
            <img src="<?php echo BUGLOOS_THEME_URI ?>/assets/images/icon/technologies/<?php echo $value; ?>" alt="<?php echo $key; ?>">
            <div class="tech-name"><?php echo $key; ?></div>
          </div>
          <?php
        }
        ?>
      </div>
    </section>
    <?php
    $project_discovery_url = get_field( 'project_discovery_url', 'option' );
    if ( $project_discovery_url )
    {
      ?>
      <section id="discovery">
        <div class="box d-flex flex-column flex-lg-row justify-content-lg-between u-flex--center flex-wrap">
          <div class="col-12 col-lg-8 text-center text-lg-start">
            <?php _e( 'Want to know what we can do for you?', 'bugloos' ); ?>
            <br>
            <?php _e( 'Plan a discovery call with one of our experts.', 'bugloos' ); ?>
          </div>
          <div class="col-12 col-lg-3 u-flex u-flex--row btn-discovery">
            <div class="u-flex u-flex--center c-button-module-2">
              <a href="<?php echo esc_url( $project_discovery_url ); ?>"> <em class="button-circle"></em>
                <span aria-label="hidden"><?php _e( 'Plan discovery call', 'bugloos' ); ?></span> </a>
            </div>
          </div>
        </div>
      </section>
      <?php
    }
    ?>
  </section>
  <?php
  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
<?php get_footer(); ?>
