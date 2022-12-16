<?php
/**
 * The template for team members page
 * @package Bugloos
 *
 * Template Name: Team Members
 */
get_header();
?>
  <input class="theme-switch" type="checkbox" id="theme-switch">
  <div id="page" class="main-container c-team-members container-fluid g-0">
    <?php
    get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-29' ] );
    get_template_part( 'templates/partials/header-menu' );
    ?>
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php _e( 'Bugloos System', 'bugloos' ); ?></h1>
    </div>
    <div class="u-team-bg"></div>
    <div id="universe" class="scale-stretched">
      <div id="galaxy" class="">
        <div id="solar-system" class="earth">
          <?php
          $departments = get_terms( [
            'taxonomy'   => 'department',
            'hide_empty' => 0
          ] );

          foreach ( $departments as $department )
          {
            $planet = get_field( 'planet', $department->taxonomy . '_' . $department->term_id );
            ?>
            <div id="<?php echo esc_attr( $planet ); ?>" class="orbit">
              <div class="pos">
                <div class="planet">
                  <div class="infos">
                    <h5><?php echo $department->name; ?></h5>
                    <?php
                    if ( $department->description )
                    {
                      ?>
                      <p><?php echo $department->description; ?></p>
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
  </div>
<?php
get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
get_template_part( 'templates/partials/get-back' );
get_template_part( 'templates/partials/footer-socials' );

get_footer();
