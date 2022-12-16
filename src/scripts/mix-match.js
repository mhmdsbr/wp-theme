//region Variable
// class Services {
//   static WebDevelopment = 'Web-Development';
//   static MobileApplication = 'Mobile-Application';
//   static WebsiteDevelopment = 'Website-Development';
//   static StaffAugmentation = 'Staff-Augmentation';
//   static UIUXDesign = 'UI-UX-Design';
// }

// const serviceTags = [
//   {
//     id: 'Web-Development',
//     tags: ['Search Bar', 'Contact Form', 'Blog Page', 'CRM', 'CMS', 'Registration', 'Live chat']
//   },
//   {
//     id: 'Mobile-Application',
//     tags: ['Search Bar', 'Contact Form', 'Live chat']
//   },
//   {
//     id: 'Website-Development',
//     tags: ['Search Bar', 'Live chat']
//   },
//   {
//     id: 'Staff-Augmentation',
//     tags: {
//       frontend: ['Vue.js', 'React', 'Webpack', 'Redux', 'Jest'],
//       backend: ['Java', 'Hibernate']
//     }
//   },
//   {
//     id: 'UI-UX-Design',
//     tags: ['Search Bar', 'Contact Form', 'Blog Page',]
//   }
// ];
// let allProjects = [
//   {
//     name: 'UrbanSofa',
//     imagUrl: ['images/projects/urbanSofa.png', 'images/projects/urbanSofa1.png'],
//     tags: ['Search Bar', 'Contact Form']
//   },
//   {
//     name: 'Debelegger',
//     imagUrl: ['images/projects/Debelegger.png', 'images/projects/Debelegger1.png'],
//     tags: ['Contact Form', 'Blog Page']
//   },
//   {
//     name: 'Holigo',
//     imagUrl: ['images/projects/Holigo.png', 'images/projects/Holigo1.png'],
//     tags: ['Blog Page', 'CRM']
//   },
//   {
//     name: 'NUNU',
//     imagUrl: ['images/projects/Holigo.png', 'images/projects/Holigo1.png'],
//     tags: ['CRM', 'CMS', 'Registration', 'Live chat']
//   }
// ];
let selectedTags = [];
let filteredProject = [];
let selectedTeam = '';

// class Teams {
//   static ProductOwner = 'Product-Owner';
//   static UXUI = 'UX-UI';
//   static Developer = 'developer';
//   static DevOps = 'DevOps';
// }

//endregion

if ( document.readyState !== "loading" )
{
  console.log( "document is already ready, just execute code here" );
}
else
{
  document.addEventListener( "DOMContentLoaded", function ()
    {

      $( document ).ready( function ()
      {
        //#region Header
        //slide nav menu on header
        $( ".u-nav__slider-icon" ).on( 'click', function ()
        {
          $( ".menu-hide" ).toggleClass( "show" );
        } );
        $( ".menu-hide nav ul li" ).on( 'click', function ()
        {
          $( ".menu-hide" ).removeClass( "show" );
        } );
        selectedLanguage();
        //endregion
        $( ".card-service.is-selected" ).trigger( "click" );

      } );
      //#region Particle
      particlesJS.load( "particles-js-25", bugloosJS.particleJsonURL );
      //#endregion

      $( ".btn-booking" ).on( 'click', function ()
      {
        $( "#booking-popup" ).fadeIn( 500 );
      } );
      //#endregion
      //#region Popup Staff-Augmentation
      $( "#staff-augmentation" ).on( 'click', function ()
      {
        $( "#staff-popup" ).fadeIn( 500 );
      } );

      $( ".he-knows" ).on( 'click', function ()
      {
        $( "#staff-popup" ).fadeOut( 500 );
        $( '#frm-team' ).show();
        loadStaffSections();
      } );
      //endregion
      //#region Popup Booking
      $( "#open-success-msg" ).on( 'click', function ()
      {
        $( "#success-msg" ).fadeIn( 500 );
      } );

      $( "#close-success-msg" ).on( 'click', function ()
      {
        $( "#success-msg" ).fadeOut( 500 );
        $( "#booking-popup" ).fadeOut( 500 );
      } );

      //#endregion
      addListenerClickServices();
    }
  )
}

//change style of services
function addListenerClickServices ()
{
  $( ".card-service" ).on(
    'click',
    function ( event )
    {
      event.stopPropagation();
      event.stopImmediatePropagation();
      setDefaultStyleServices();
      //set selected item
      $( this ).removeClass( 'u-flex--row' );
      $( this ).addClass( 'u-flex--column' ).addClass( 'is-selected' );
      $( this ).children( '.col-3' ).removeClass( 'col-3' );
      $( this ).children( '.col-9' ).removeClass( 'col-9' );
      resetTags();
      removeAllElementsStaffExceptTeam();
      $( '#invoice' ).hide();

      if ( $( this ).attr( 'id' ) !== 'staff-augmentation' )
      {
        loadTags( $( this ).attr( 'id' ) );
        $( '#parameters' ).show();
        $( '#right-col>.title' ).show();
        $( '#frm-team' ).hide();
        $( '.add-staff' ).hide();
      }
    } );
}

function setDefaultStyleServices ()
{
  const $cardService = $( ".card-service" );
  $cardService.removeClass( 'u-flex--column' ).removeClass( 'is-selected' ).addClass( 'u-flex--row' );
  $cardService.children( 'img' ).addClass( 'col-3' );
  $cardService.children( 'span' ).addClass( 'col-9' );
}

function loadTags ( id )
{
  const tags = bugloosJS.serviceTags.filter( project => project.id === id ).map( project => project.tags )[0];
  tags.forEach( ( tag ) =>
  {
    $( `
      <div class="tag-container" id="${tag}">
        <div class="d-flex justify-content-between">
          <span class="tag-text">${tag}</span>
          <i class="icon-plus"></i>
        </div>
      </div>` ).appendTo( '#serviceTags' );
  } )
  addListenerClickTags();
}

function resetTags ()
{
  $( "#serviceTags" ).empty();
  $( "#projects" ).empty();
  filteredProject = [];
  selectedTags = [];
}

function addListenerClickTags ()
{
  $( ".tag-container" ).on(
    'click',
    function ( event )
    {
      event.stopPropagation();
      event.stopImmediatePropagation();
      $( this ).toggleClass( 'selected' );
      $( this ).children( 'div' ).children( '.icon-plus' ).toggleClass( 'rotate-icon' );
      $( this ).children( 'div' ).children( '.tag-text' ).toggleClass( 'selected' );

      if ( selectedTags.some( x => x === $( this ).attr( 'id' ) ) )
      {
        selectedTags = selectedTags.filter( s => s !== $( this ).attr( 'id' ) )
      }
      else
      {
        selectedTags.push( $( this ).attr( 'id' ) );
      }
      if ( $( this ).attr( 'id' ) !== 'staff-augmentation' )
      {
        loadProjectsByTag();
      }
    } );
}

function loadProjectsByTag ()
{
  $( "#projects" ).empty();
  filteredProject = [];

  selectedTags.forEach( ( tag, index ) =>
  {
    const projectstHasTag = bugloosJS.allProjects.filter( project => project.tags.includes( tag ) );
    projectstHasTag.forEach( p =>
    {
      if ( filteredProject.every( f => f.name !== p.name ) )
      {
        filteredProject.push( p );
      }
    } )

    if ( index === selectedTags.length - 1 )
    {
      createProjects();
    }
  } );
}

function createProjects ()
{
  filteredProject.forEach( ( project ) =>
  {
    $( `
      <div class="sub-title">${project.name}</div>
      <div class="row">
        <img class="col-6" src="${project.imagUrl[0]}" alt="">
        <img class="col-6" src="${project.imagUrl[1]}" alt="">
      </div>` ).appendTo( '#projects' );
  } );
}

//region Staff
function loadStaffSections ()
{
  removeAllElementsStaffExceptTeam();
  removingElementsNotExistsInStaff();
  createDropdownTeam();
  $( '.add-staff' ).show();
}

function createDropdownTeam ()
{
  // $(`<label for="select-team">To Team
  //       <select id="select-team" name="team">
  //         <option></option>
  //         <option value="Product-Owner">Product Owner</option>
  //         <option value="UX-UI">UX / UI</option>
  //         <option value="Developer" onselect="addPanelDeveloper()">Developer</option>
  //         <option value="DevOps">DevOps</option>
  //       </select>
  //     </label>`).appendTo('#frm-team');

  $( "#select-team" ).select2( {
    width : "null", // need to override the changed default
    dropdownParent : $( "#u-form-container--js" ),
    minimumResultsForSearch : Infinity,
    placeholder : 'choose a team member'
  } );
  addListenerSelectTeam();
}

function addListenerSelectTeam ()
{
  $( '#select-team' ).on(
    "change",
    function ( event )
    {
      event.stopPropagation();
      event.stopImmediatePropagation();
      removeAllElementsStaffExceptTeam();
      selectedTeam = $( this ).val();
      if ( selectedTeam === 'developer' )
      {
        addPanelDeveloper();
      }
      else
      {
        removeStaffDeveloperContainer();
        createDropdownLevelSingle();
      }
    } );
}

function addPanelDeveloper ()
{
  $( '.container-developer' ).show();
  $( '.add-staff' ).show();
  createDeveloperTags();
  createDropdownLevelMulti();
}

function createDeveloperTags ()
{
  // const staff = bugloosJS.serviceTags.filter( project => project.id === 'staff-augmentation' )
  // const frontendTags = staff.map(project => project.tags.frontend)[0];
  // const backendTags = staff.map(project => project.tags.backend)[0];

  // frontendTags.forEach((tag) => {
  //   $(`
  //     <div class="tag-container" id="${tag}">
  //       <div class="d-flex justify-content-between">
  //         <span class="tag-text">${tag}</span>
  //         <i class="icon-plus"></i>
  //       </div>
  //     </div>
  //   `).appendTo('#front-tags');
  // });

  $( '#front-tags' ).show();
  $( '#back-tags' ).show();

  // backendTags.forEach((tag) => {
  //   $(`
  //     <div class="tag-container" id="${tag}">
  //       <div class="d-flex justify-content-between">
  //         <span class="tag-text">${tag}</span>
  //         <i class="icon-plus"></i>
  //       </div>
  //     </div>
  //   `).appendTo('#back-tags');
  // });

  addListenerClickTags();
  addListenerClickMinus();
  addListenerClickPlus();
}

function createDropdownLevelMulti ()
{
  // $(`
  //   <label for="select-level-multi">Level
  //     <select id="select-level-multi"  multiple="multiple">
  //       <option></option>
  //       <option value="Junior">Junior</option>
  //       <option value="Medior">Medior</option>
  //       <option value="Senior">Senior</option>
  //       <option value="Team leader">Team leader</option>
  //     </select>
  //   </label>`).appendTo('#frm-level-multi');

  $( "#frm-level-multi" ).show();

  $( "#select-level-multi" ).select2( {
    width : "null", // need to override the changed default
    dropdownParent : $( "#u-form-container--js" ),
    minimumResultsForSearch : Infinity,
    closeOnSelect : false,
    placeholder : 'Level'
  } );
}

function createDropdownLevelSingle ()
{
  // $(`
  //   <label for="select-level-single">Level
  //     <select id="select-level-single">
  //       <option></option>
  //       <option value="Junior">Junior</option>
  //       <option value="Medior">Medior</option>
  //       <option value="Senior">Senior</option>
  //       <option value="Team leader">Team leader</option>
  //     </select>
  //   </label>`).appendTo('#frm-level-single');

  $( '#frm-level-single' ).show();

  $( "#select-level-single" ).select2( {
    width : "null", // need to override the changed default
    dropdownParent : $( "#u-form-container--js" ),
    minimumResultsForSearch : Infinity,
    placeholder : 'Level'
  } );
}

function removeAllElementsStaffExceptTeam ()
{
  removeStaffDeveloperContainer();
  $( '#frm-level-single' ).hide();
  $( '#frm-level-multi' ).hide();
}

function removingElementsNotExistsInStaff ()
{
  $( '#parameters' ).hide();
  $( '.add-staff' ).hide();
  $( '#right-col>.title' ).hide();
}

function removeStaffDeveloperContainer ()
{
  $( '.container-developer' ).hide();
  $( '#front-tags' ).hide();
  $( '#back-tags' ).hide();
}

function counter ()
{
  let privateCounter = 0;
  let changeBy = ( val ) => privateCounter += val;
  let increment = () => changeBy( 1 );
  let decrement = () => changeBy( -1 );
  let value = () => privateCounter;

  return { increment, decrement, value }
}

const counterFront = counter();
const counterBack = counter();

function addListenerClickMinus ()
{
  $( ".minus" ).on(
    'click',
    function ( event )
    {
      event.stopPropagation();
      event.stopImmediatePropagation();
      if ( $( this ).parents( '.front-end-counter' ).length )
      {
        counterFront.decrement()
      }
      if ( $( this ).parents( '.back-end-counter' ).length )
      {
        counterBack.decrement();
      }
      setValueDeveloperCount();
    } );
}

function addListenerClickPlus ()
{
  $( ".plus" ).on(
    'click',
    function ( event )
    {
      event.stopPropagation();
      event.stopImmediatePropagation();
      if ( $( this ).parents( '.front-end-counter' ).length )
      {
        counterFront.increment()
      }
      if ( $( this ).parents( '.back-end-counter' ).length )
      {
        counterBack.increment();
      }
      setValueDeveloperCount();
    } );
}

function setValueDeveloperCount ()
{
  $( '.front-end-counter>.number' ).text( counterFront.value );
  $( '.back-end-counter>.number' ).text( counterBack.value );
}

function createSelectPeriod ()
{
  $( "#select-period" ).select2( {
    width : "null", // need to override the changed default
    dropdownParent : $( "#u-form-container-period--js" ),
    minimumResultsForSearch : Infinity,
    placeholder : 'Level'
  } );
  $( '#invoice' ).show();
}

//endregion

function selectedLanguage ()
{
  $( ".u-lang-swticher>ul>li" ).on(
    'click',
    function ( event )
    {
      $( ".u-lang-swticher>ul>li" ).removeClass( 'selected' );
      $( this ).addClass( 'selected' );
    } );
}
