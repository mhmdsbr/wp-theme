<?php
$tel       = get_field( 'tel', 'option' );
$address   = get_field( 'address', 'option' );
$vat       = get_field( 'vat_number', 'option' );
$iban      = get_field( 'iban', 'option' );
$email     = get_field( 'email', 'option' );
$cc_number = get_field( 'cc_number', 'option' );
$map       = get_field( 'google_map', 'option' );
?>
  <div class="u-flex u-flex--column o-title">
    <h1 class="e-default-title"><?php echo get_field( 'contact_title', 'option' ); ?></h1>
    <p><?php echo nl2br( get_field( 'contact_description', 'option' ) ); ?></p>
  </div>
  <div id="u-form-container--js" class="u-flex u-flex--column o-form-container">
    <h5 class="form__cta--mobile">Book a Meeting</h5>
    <form class="u-flex--center u-flex u-form--wrap" action="">
      <label for="form-project-discovery">Type of Inquiry <select id="form-project-discovery" name="projects">
          <option value="project-discovery">Project Discovery</option>
          <option value="staff-augmentation">Staff Augmentation</option>
          <option value="request-information">Request Information</option>
          <option value="other">Other</option>
        </select> </label>
      <!-- Date Time Picker -->
      <label class="dateTime-container"> <span class="dateTime-title">Pick a Date and Time</span>
        <span style="position: relative;display: flex;">
                    <div id="datePlaceholder">As soon as possible</div>
                    <input type="text" name="datepicker" id="form-date" class="date-picker-main-input"/>
                  </span> <span id="timePicker" style="display: none;">
                    <div class="date-picker-divider"></div>
                    <p class="m-0">Enter Time</p>
                    <div class="d-flex align-items-center justify-content-center">
                      <div class="d-flex flex-column time-input" id="hour">
                        <input type="text" minlength="1" maxlength="2">
                        <span>Hour</span>
                      </div>
                      <span class="colon">:</span>
                      <div class="d-flex flex-column time-input" id="minute">
                        <input type="text" minlength="1" maxlength="2">
                        <span>Minute</span>
                      </div>
                      <div class="d-flex flex-column time-switcher">
                        <span data-value="AM">AM</span>
                        <span data-value="PM">PM</span>
                      </div>
                    </div>
                  </span> </label> <label for="form-content"> Preferred Conferencing Platforms
        <select id="form-content" name="content">
          <option value="zoom">Zoom</option>
          <option value="google-meet">Google Meet</option>
          <option value="skype">Skype</option>
          <option value="slack">Slack</option>
          <option value="office-team">Office Team</option>
          <option value="other">Other</option>
        </select> </label>
      <div class="u-flex u-flex--center c-button-module-2 btn-booking">
        <a>
          <em class="button-circle"></em> <span aria-label="hidden">Book Meeting</span>
        </a>
      </div>
    </form>
    <div class="main-popup" id="booking-popup">
      <div class="popup__content">
        <div class="box-booking u-flex u-flex--column">
          <h4>Help Us to Set Most Useful Meeting</h4>
          <label for="full-name">Your Name*</label> <input type="text" id="full-name" name="fullname" required>
          <label for="copmany">Company Name*</label> <input type="text" id="copmany" name="company">
          <label for="email">Email*</label> <input type="email" id="email" name="email">
          <label for="desc">Description</label> <textarea id="desc" name="description"></textarea>
          <div class="u-flex u-flex--center c-button-module-2" id="open-booking-msg">
            <button>
              <em class="button-circle"></em> <span aria-label="hidden">Book Meeting</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="main-popup" id="booking-msg">
      <div class="popup__content">
        <div class="box-booking-msg" onclick="event.stopPropagation()">
          <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/big-tick.svg" alt="">
          <p>We receieved your information, we will connect to you very soon</p>
          <div class="u-flex u-flex--center c-button-module-2" id="close-booking">
            <button>
              <em class="button-circle"></em> <span aria-label="hidden">To Bugloos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php
if ( $tel || $address || $vat || $iban || $email || $cc_number || $map )
{
  ?>
  <div class="o-contact-module row g-0 u-flex--row">
    <h5 class="form__cta--mobile"><?php _e( 'Contact', 'bugloos' ); ?></h5>
    <div class="o-contact__wrapper g-0 row">
      <?php
      if ( $map )
      {
        ?>
        <div class="o-contact__map">
          <?php echo $map; ?>
        </div>
        <?php
      }

      if ( $tel || $address || $vat || $iban || $email || $cc_number )
      {
      ?>
      <div class="o-contact__box">
        <div class="row">
          <?php
          if ( $tel )
          {
            ?>
            <p class="col-6 contact__phone"><?php echo $tel; ?></p>
            <?php
          }

          if ( $vat )
          {
            ?>
            <p class="col-6 contact__num"><?php echo sprintf( '%s: %s', __( 'VAT number', 'bugloos' ), $vat ); ?></p>
            <?php
          }

          if ( $address )
          {
            ?>
            <p class="col-6 contact__address"><?php echo $address; ?></p>
            <?php
          }

          if ( $iban )
          {
            ?>
            <p class="col-6 contact__num"><?php echo sprintf( '%s: %s', __( 'IBAN', 'bugloos' ), $iban ); ?></p>
            <?php
          }

          if ( $email )
          {
            ?>
            <p class="col-6 contact__mail"><?php echo $email; ?></p>
            <?php
          }

          if ( $cc_number )
          {
            ?>
            <p class="col-6 contact__num"><?php echo sprintf( '%s: %s', __( 'CC number', 'bugloos' ), $cc_number ); ?></p>
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
  <?php
}
