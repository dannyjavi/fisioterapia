import { Component,OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.scss']
})
export class NavlateralComponent implements OnInit{
  ngOnInit(){
    $(document).ready(function(){
      $('.NavLateral-DropDown').on('click', function(e){
          e.preventDefault();
          var DropMenu=$(this).next('ul');
          var CaretDown=$(this).children('i.NavLateral-CaretDown');
          DropMenu.slideToggle('fast');
          if(CaretDown.hasClass('NavLateral-CaretDownRotate')){
              CaretDown.removeClass('NavLateral-CaretDownRotate');    
          }else{
              CaretDown.addClass('NavLateral-CaretDownRotate');    
          }
           
      });
    });
  }
}(function($){
  $(window).load(function(){
      $(".NavLateral-content").mCustomScrollbar({
          theme:"light-thin",
          scrollbarPosition: "inside",
          autoHideScrollbar: true,
          scrollButtons:{ enable: true }
      });
      $(".ContentPage, .NotificationArea").mCustomScrollbar({
          theme:"dark-thin",
          scrollbarPosition: "inside",
          autoHideScrollbar: true,
          scrollButtons:{ enable: true }
      });
  });
})

