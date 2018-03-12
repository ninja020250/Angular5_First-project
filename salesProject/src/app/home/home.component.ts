import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    Core.init();
  }
  ngAfterViewInit() {
<<<<<<< HEAD
    $.getScript(  "assets/AutoHintTheme/js/utility/utility.js", function( data, textStatus, jqxhr ) {
      $.getScript( "assets/AutoHintTheme/js/demo/demo.js", function( data, textStatus, jqxhr ) {
        $.getScript( "assets/AutoHintTheme/js/main.js", function( data, textStatus, jqxhr ) {
          Core.init();
        });
      });
    });
=======
  
    Core.init();
>>>>>>> a61cbf0f82e2b30a76230a5443fa3e0d0a59c0ee
  }
 
}
