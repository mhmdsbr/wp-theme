<?php get_header(); ?>
  <input class="theme-switch" type="checkbox" id="theme-switch">
  <div id="page" class="main-container c-team-member container-fluid g-0">
    <?php
    get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-15' ] );
    get_template_part( 'templates/partials/header-menu' );
    ?>
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php _e( 'Bugloos System', 'bugloos' ); ?></h1>
    </div>
    <div id="universe" class="scale-stretched">
      <div id="galaxy" class="">
        <div id="solar-system" class="earth">
          <?php
          while ( have_posts() )
          {
            the_post();
            ?>
            <div id="<?php echo esc_attr( get_field( 'planet' ) ); ?>" class="orbit">
              <div class="pos">
                <div class="planet">
                  <div class="infos">
                    <h5><?php the_title(); ?></h5>
                    <?php
                    $description = get_field( 'description' );
                    if ( $description )
                    {
                      ?>
                      <p><?php echo $description; ?></p>
                      <?php
                    }

                    $email    = get_field( 'email' );
                    $linkedin = get_field( 'linkedin' );

                    if ( $email || $linkedin )
                    {
                      ?>
                      <div class="media-share">
                        <?php
                        if ( $email )
                        {
                          ?>
                          <a href="mailto:<?php echo esc_url( $email ); ?>" rel="nofollow">
                            <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/mail-team.svg" alt="<?php echo esc_attr( get_the_title() ); ?>">
                          </a>
                          <?php
                        }

                        if ( $linkedin )
                        {
                          ?>
                          <a href="<?php echo esc_url( $linkedin ) ?>" rel="nofollow" target="_blank">
                            <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/linkedin-team.svg" alt="<?php echo esc_attr( get_the_title() ); ?>">
                          </a>
                          <?php
                        }
                        ?>
                      </div>
                      <?php
                    }
                    ?>
                  </div>
                </div>
              </div>
            </div>
            <?php
          }
          ?>
          <div id="sun">
            <dl class="infos">
              <dd><span></span></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <?php
    get_template_part( 'templates/partials/get-back' );
    get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
    get_template_part( 'templates/partials/footer-socials' );
    get_template_part( 'templates/partials/circle-button' );
    ?>
  </div>
<?php
get_footer();
