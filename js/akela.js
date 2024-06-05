var modal = function () {
  
  // Modal Options
  this.modalID = "";
  this.Backdrop = true;
  this.Esc = true;
  this.BackdropColor = "";
  this.ModalColor = "";
  this.FontColor = "";
  this.HeaderColor = "";
  this.ButtonColor = "";
  this.ButtonFontColor = "";
  //this.Animation = true;
  this.HeaderIcon = true;
  this.HeaderIconSelect = "paw";
  this.BackDropClose = true;
  
  this.applyStyle = function() {
    if (this.BackdropColor != "") {
      var backdrop = document.getElementById( 'modal-backdrop' );
      backdrop.style.backgroundColor = this.BackdropColor;
    }
    if (this.ModalColor != "") {
      var modal = document.getElementById( this.modalID );
      modal.style.backgroundColor = this.ModalColor;
    }
    if (this.FontColor != "") {
      var modal = document.getElementById( this.modalID );
      modal.style.color = this.FontColor;
    }
    if (this.HeaderColor != "") {
      var modalheading = document.getElementById('modal-heading');
      modalheading.style.color = this.HeaderColor;
    }
    if (this.ButtonColor != "") {
      var button = document.getElementById('modal-close');
      button.style.backgroundColor = this.ButtonColor;
    }
    if (this.ButtonFontColor != "") {
      var button = document.getElementById('modal-close');
      button.style.color = this.ButtonFontColor;
    }
    if (!this.HeaderIcon) {
      document.getElementById('modal-icon').style.display = 'none';
    }
    if (this.HeaderIconSelect != "") {
      var icon = document.getElementById('modal-icon');
      icon.classList.remove('fa-paw');
      icon.classList += " fa-" + this.HeaderIconSelect;
    }
  }
  
  this.show = function (modalId) {
    var modalElement = document.getElementById(modalId);
    if (this.Backdrop) {
        var backdrop = document.createElement('div');
    backdrop.id="modal-backdrop";
    backdrop.classList.add("modal-backdrop");
    document.body.appendChild(backdrop);
    var backdrop = document.getElementById("modal-backdrop");
    backdrop.className += " modal-open close";
    }
    modalElement.className += " modal-open";
    this.init();
    this.applyStyle();
  }
  
  // Modal Close Listeners
  this.closeModalListen = function(button) {
    var modalFooter = button.parentElement;
    var modalContent = modalFooter.parentElement;
    var modalElement = modalContent.parentElement;
    if (modalElement == null && this.BackDropClose) {
        var y = document.getElementsByClassName('modal-open');
        var aNode = y[0];
        var m = y[0].id;
        modalElement = document.getElementById(m);
        }
    if (this.Backdrop) {
      var backdrop = document.getElementById("modal-backdrop");
    }
    console.log(modalElement);
    this.closeModal(modalElement, backdrop);
  }
  
  // Open Modal
  this.openModal = function(button) {
    var button = button;
    var modal = button.getAttribute("data-modal");
    var modalElement = document.getElementById(modal);
    if (this.Backdrop) {
      var backdrop = document.createElement('div');
      backdrop.id="modal-backdrop";
      backdrop.classList.add("modal-backdrop");
      backdrop.classList.add("close");
      document.body.appendChild(backdrop);
      var backdrop = document.getElementById("modal-backdrop");
      backdrop.className += " modal-open close";
    }
    this.applyStyle();
    modalElement.className += " modal-open";
  }
  
  // Close Modal
  this.closeModal = function(modalElement, backdrop) {
    modalElement.className = modalElement.className.replace(/\bmodal-open\b/, '');
    if (this.Backdrop) {
      backdrop.className = backdrop.className.replace(/\bmodal-open\b/, '');
    }
  }
  
  // Initialise Function
  this.init = function () {
    var y = document.getElementsByClassName('modal');
    var aNode = y[0];
    this.modalID = y[0].id;
    // Create Events for the modals
    if (document.addEventListener) {
        document.addEventListener("click", this.handleClick.bind(this), false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onclick", this.handleClick.bind(this));
    }
    document.onkeydown = function(evt) {
    var m = new modal();
    if (m.Esc) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc");
        } else {
            isEscape = (evt.keyCode == 27);
        }
        if (isEscape) {
            var y = document.getElementsByClassName('modal-open');
            var aNode = y[0];
            var bNode = y[1];
            m.closeModal(aNode, bNode);
        }
        }

  };
  }
  
  // Handle Button Click
  this.handleClick = function(event) {
    var thisModal = this;
      event = event || window.event;
      event.target = event.target || event.srcElement;
      var element = event.target;
      while (element) {
          if (element.nodeName === "BUTTON" && /akela/.test(element.className)) {
              thisModal.openModal(element);
              break;
          } else if (element.nodeName === "BUTTON" && /close/.test(element.className)) {
              thisModal.closeModalListen(element);
              break;
          } else if (element.nodeName === "DIV" && /close/.test(element.className)) {
              thisModal.closeModalListen(element);
              break;
          }
          element = element.parentNode;
      }
  }
}



// Initalise Modal Engine
function showModal () {
  
    var akelaModal = new modal();
    akelaModal.show('static'); 
  
}
