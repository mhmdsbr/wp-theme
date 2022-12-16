<div class="main-container container-fluid g-0 apply-job-page">
  <?php get_template_part( 'templates/partials/header-menu' ); ?>
  <div class="u-home__bg--secondary">
    <div id="particles-js-11"></div>
  </div>
  <div class="u-flex u-flex--column o-title">
    <h1 class="e-default-title" style="z-index: unset;"><?php echo get_the_title(); ?></h1>
  </div>
  <section class="c-apply-job u-flex u-flex--column">
    <div class="u-flex u-flex--column o-form-apply">
      <form class="u-flex--column u-flex o-form-wrap" action="">
        <div class="form-wrap__col">
          <label>Your Name <input type="text" name="name"> </label>
          <!-- Date Time Picker -->
          <label>Birth Date <em style="position: relative;">
              <div id="datePlaceholder" style="height: 7rem;top: 0;"></div>
              <input type="text" name="datepicker" id="form-date" class="date-picker-main-input"/> </em>
            <div id="timePicker" style="display: none;">
              <div class="date-picker-divider"></div>
              <p class="m-0">Enter Time</p>
              <div class="d-flex align-items-center justify-content-center">
                <div class="d-flex flex-column time-input" id="hour">
                  <input type="text" minlength="1" maxlength="2"> <span>Hour</span>
                </div>
                <span class="colon">:</span>
                <div class="d-flex flex-column time-input" id="minute">
                  <input type="text" minlength="1" maxlength="2"> <span>Minute</span>
                </div>
                <div class="d-flex flex-column time-switcher">
                  <span data-value="AM">AM</span> <span data-value="PM">PM</span>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div class="form-wrap__col pt-0">
          <label> Phone Number <input type="phone-number" name="phone-number"> </label> <label> Email*
            <input type="email" name="email"> </label>
        </div>
        <div class="form-wrap__col pt-0">
          <label> Website, Social Media or any Helpful Links <input type="url" name="email"> </label>
        </div>
        <div class="form-wrap__col">
          <label class="file-resume" for="file"> <span>Resume</span> <input type="file" name="file" id="file">
            <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/fi_upload-cloud.svg" alt=""> </label>
        </div>
      </form>
      <div class="u-flex u-flex--center c-button-module-2">
        <button>
          <em class="button-circle"></em> <span aria-label="hidden">Send Request</span>
        </button>
      </div>
    </div>
  </section>
  <?php get_template_part( 'templates/partials/footer-socials' ); ?>
</div>
