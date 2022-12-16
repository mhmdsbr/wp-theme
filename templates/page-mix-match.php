<?php
/**
 * The template for mix and match page
 * @package Bugloos
 *
 * Template Name: Mix and Match
 */

get_header();
?>
<input class="theme-switch" type="checkbox" id="theme-switch">
<div id="page" class="main-container container-fluid g-0">
  <?php
  get_template_part( 'templates/partials/header-menu' );
  get_template_part( 'templates/partials/lottie-wave', '', [ 'id' => 'particles-js-25' ] );

  $project_categories = get_terms( [
    'taxonomy'   => 'project_category',
    'hide_empty' => false
  ] );

  if ( ! is_wp_error( $project_categories ) && is_array( $project_categories ) )
  {
    ?>
    <section class="c-mix">
      <div class="main-row d-flex u-flex--row u-flex--center justify-content-between">
        <div class="col-4 px-0 u-flex u-flex--column justify-content-between" id="left-col">
          <?php
          $iteration = 1;
          foreach ( $project_categories as $project_category )
          {
            $image = get_field( 'image', $project_category->taxonomy . '_' . $project_category->term_id );
            ?>
            <div class="u-flex u-flex--row u-flex--center card card-service<?php echo $iteration == 1 ? ' u-flex--column is-selected' : ''; ?>" id="<?php echo esc_attr( $project_category->slug ); ?>">
              <?php
              if ( $image )
              {
                ?>
                <img class="<?php echo $iteration == 1 ? '' : 'col-3'; ?>" src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>"/>
                <?php
              }
              ?>
              <span class="<?php echo $iteration == 1 ? '' : 'col-9 '; ?>service-name"><?php echo $project_category->name; ?></span>
            </div>
            <?php
            $iteration ++;
          }
          ?>
        </div>

        <div class="col-4 card d-flex flex-column justify-content-between" id="center-col">
          <div id="u-form-container--js" class="u-flex u-flex--column o-form-container">
            <form class="u-flex flex-column u-form--wrap " action="">
              <div class="title"><?php _e( 'Feature Section', 'bugloos' ); ?></div>
              <div id="parameters" class="sub-title"><?php _e( 'Parameters', 'bugloos' ); ?></div>
              <div id="serviceTags"></div>
              <?php
              $to_team = get_field( 'staff_augmentation_team', 'option' );
              if ( $to_team )
              {
                ?>
                <div id="frm-team">
                  <label for="select-team">
                    <?php
                    _e( 'To Team', 'bugloos' );
                    ?>
                    <select id="select-team" name="team">
                      <option></option>
                      <?php
                      foreach ( $to_team as $team )
                      {
                        $slug = strtolower( str_replace( ' ', '-', $team[ 'title' ] ) );
                        ?>
                        <option value="<?php echo esc_attr( $slug ); ?>" <?php echo $slug == 'developer' ? 'onselect="addPanelDeveloper()"' : '' ?>><?php echo $team[ 'title' ]; ?></option>
                        <?php
                      }
                      ?>
                    </select> </label>
                </div>
                <?php
              }

              $levels = get_field( 'staff_augmentation_levels', 'option' );
              if ( $levels )
              {
                ?>
                <div id="frm-level-single">
                  <label for="select-level-single">
                    <?php _e( 'Level', 'bugloos' ); ?>
                    <select id="select-level-single">
                      <option></option>
                      <?php
                      foreach ( $levels as $level )
                      {
                        $slug = strtolower( str_replace( ' ', '-', $level[ 'title' ] ) );
                        ?>
                        <option value="<?php echo esc_attr( $slug ) ?>"><?php echo $level[ 'title' ]; ?></option>
                        <?php
                      }
                      ?>
                    </select> </label>
                </div>
                <?php
              }
              ?>
              <div class="container-developer">
                <?php
                $frontend = get_field( 'staff_augmentation_frontend', 'option' );
                if ( $frontend )
                {
                  ?>
                  <div class="d-flex justify-content-between">
                    <div class="lbl">
                      <?php _e( 'Front-end', 'bugloos' ); ?>
                    </div>
                    <div class="front-end-counter d-flex u-flex--center">
                      <div class="d-flex u-flex--center">
                        <div class="minus"></div>
                      </div>
                      <div class="number u-flex u-flex--center">0</div>
                      <div class="d-flex u-flex--center">
                        <div class="plus"></div>
                      </div>
                    </div>
                  </div>
                  <div id="front-tags">
                    <?php
                    foreach ( $frontend as $item )
                    {
                      $slug = strtolower( str_replace( ' ', '-', $item[ 'title' ] ) );
                      ?>
                      <div class="tag-container" id="<?php echo esc_attr( $slug ); ?>">
                        <div class="d-flex justify-content-between">
                          <span class="tag-text"><?php echo $item[ 'title' ]; ?></span> <i class="icon-plus"></i>
                        </div>
                      </div>
                      <?php
                    }
                    ?>
                  </div>
                  <?php
                }

                $backend = get_field( 'staff_augmentation_backend', 'option' );
                if ( $backend )
                {
                  ?>
                  <div class="d-flex justify-content-between">
                    <div class="lbl">
                      <?php _e( 'Back-end', 'bugloos' ); ?>
                    </div>
                    <div class="back-end-counter d-flex u-flex--center">
                      <div class="d-flex u-flex--center">
                        <div class="minus"></div>
                      </div>
                      <div class="number u-flex u-flex--center">0</div>
                      <div class="d-flex u-flex--center">
                        <div class="plus"></div>
                      </div>
                    </div>
                  </div>
                  <div id="back-tags">
                    <?php
                    foreach ( $backend as $item )
                    {
                      $slug = strtolower( str_replace( ' ', '-', $item[ 'title' ] ) );
                      ?>
                      <div class="tag-container" id="<?php echo esc_attr( $slug ); ?>">
                        <div class="d-flex justify-content-between">
                          <span class="tag-text"><?php echo $item[ 'title' ]; ?></span> <i class="icon-plus"></i>
                        </div>
                      </div>
                      <?php
                    }
                    ?>
                  </div>
                  <?php
                }

                if ( $levels )
                {
                  ?>
                  <div id="frm-level-multi">
                    <label for="select-level-multi">
                      <?php
                      _e( 'Level', 'bugloos' );
                      ?>
                      <select id="select-level-multi" multiple="multiple">
                        <option></option>
                        <?php
                        foreach ( $levels as $level )
                        {
                          $slug = strtolower( str_replace( ' ', '-', $level[ 'title' ] ) );
                          ?>
                          <option value="<?php echo esc_attr( $slug ) ?>"><?php echo $level[ 'title' ]; ?></option>
                          <?php
                        }
                        ?>
                      </select> </label>
                  </div>
                  <?php
                }
                ?>
              </div>
            </form>

          </div>
          <div class="u-flex u-flex--row add-staff">
            <div class="u-flex u-flex--center c-button-module-2">
              <button onclick="createSelectPeriod()">
                <em class="button-circle"></em> <span aria-label="hidden"><?php _e( 'Add', 'bugloos' ); ?></span>
              </button>
            </div>
          </div>

        </div>

        <div class="col-4 card  overflow-scroll" id="right-col">
          <div class="title"><?php _e( 'Similar Projects', 'bugloos' ); ?></div>
          <div id="projects" class="u-flex u-flex--column overflow-scroll"></div>
          <div id="invoice">
            <?php
            $months = get_field( 'staff_augmentation_months', 'option' );
            if ( $months )
            {
              ?>
              <div id="u-form-container-period--js" class="u-flex u-flex--column o-form-container">
                <form id="frm-period" class="u-flex--center u-flex u-form--wrap" action="">
                  <label for="select-period">
                    <?php _e( 'Level', 'bugloos' ); ?>
                    <select id="select-period">
                      <?php
                      foreach ( $months as $month )
                      {
                        ?>
                        <option value="<?php echo esc_attr( $month[ 'title' ] ); ?>"><?php echo sprintf( _n( '%s Month', '%s Months', $month[ 'title' ], 'bugloos' ), $month[ 'title' ] ); ?></option>
                        <?php
                      }
                      ?>
                    </select> </label>
                </form>
              </div>
              <?php
            }
            ?>
            <div class="text font-weight-700"><?php _e( 'Invoice', 'bugloos' ); ?></div>
            <div>
              <span class="subject-title"><?php _e( 'Subject', 'bugloos' ); ?>:</span><span class="subject-value">Responsive web design</span>
            </div>

            <div class="tbl-items">
              <div class="d-flex header">
                <div class="col-4 desc-header px-0"><?php _e( 'Item description', 'bugloos' ); ?></div>
                <div class="col-2 purple-text"><?php _e( 'Qty', 'bugloos' ); ?></div>
                <div class="col-3 purple-text"><?php _e( 'Rate', 'bugloos' ); ?></div>
                <div class="col-3 purple-text"><?php _e( 'Amount', 'bugloos' ); ?></div>
              </div>
              <div class="d-flex body">
                <div class="col-4 desc-header px-0">Item Name</div>
                <div class="col-2">01</div>
                <div class="col-3">3,000.00</div>
                <div class="col-3">€3,000.00</div>
              </div>
              <div class="d-flex body">
                <div class="col-4 desc-header px-0">Item Name</div>
                <div class="col-2">01</div>
                <div class="col-3">3,000.00</div>
                <div class="col-3">€3,000.00</div>
              </div>
            </div>

            <div class="tbl-result">
              <div class="d-flex justify-content-between">
                <div><?php _e( 'Sub Total', 'bugloos' ); ?></div>
                <div class="purple-text"> €4,500.00</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>GST(10%)</div>
                <div class="purple-text"> €4,500.00</div>
              </div>
              <div class="d-flex justify-content-between">
                <div><?php _e( 'Total (USD)', 'bugloos' ); ?></div>
                <div>€4,950.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="u-flex u-flex--row">
        <div class="u-flex u-flex--center c-button-module-2 btn-booking">
          <button>
            <em class="button-circle"></em> <span aria-label="hidden"><?php _e( 'Book a Meeting', 'bugloos' ); ?></span>
          </button>
        </div>
      </div>

      <section class="main-popup" id="staff-popup">
        <div class="popup-container">
          <div class="popup__content">
            <div class="box-staff he-knows">
              <div class="u-flex u-flex--column u-flex--center">
                <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/staff-No.svg" alt="staff-No">
                <span><?php _e( 'He knows what he wants as feature as staff and languages', 'bugloos' ); ?></span>
              </div>
            </div>
            <div class="box-staff">
              <div class="u-flex u-flex--column u-flex--center">
                <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/staff-yes.svg" alt="staff-yes">
                <span><?php _e( 'He doesn\'t know what features he wants like staff and languages', 'bugloos' ); ?></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-popup" id="booking-popup">
        <div class="popup-container">
          <div class="box-booking popup__content u-flex u-flex--column">
            <h4>Help Us to Set Most Useful Meeting</h4>
            <label for="full-name">Your Name*</label> <input type="text" id="full-name" name="fullname" required>
            <label for="copmany">Company Name*</label> <input type="text" id="copmany" name="company">
            <label for="email">Email*</label> <input type="email" id="email" name="email">
            <label for="desc">Description</label> <textarea id="desc" name="description"></textarea>
            <div class="u-flex u-flex--center c-button-module-2" id="open-success-msg">
              <button>
                <em class="button-circle"></em> <span aria-label="hidden">Book Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="main-popup" id="success-msg">
        <div class="popup-container">
          <div class="box-success-msg popup__content" onclick="event.stopPropagation()">
            <img src="images/big-tick.svg" alt="">
            <p>We receieved your information, we will connect to you very soon</p>
            <div class="u-flex u-flex--center c-button-module-2" id="close-success-msg">
              <button>
                <em class="button-circle"></em> <span aria-label="hidden">To Bugloos</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </section>
    <?php
  }

  get_template_part( 'templates/partials/get-back' );
  get_template_part( 'templates/partials/sound', '', [ 'id' => 'howler-play2' ] );
  get_template_part( 'templates/partials/footer-socials' );
  ?>
</div>
<?php get_footer(); ?>
