jQuery(document).ready(function($){$("#fue-subscriptions-form").submit(function(){var ids=[];$("input.chk-fue-list:checked").each(function(){ids.push($(this).val())});$(".follow-up-subscriptions").block({message:null,overlayCSS:{background:'#fff url('+FUE.ajax_loader+') no-repeat center',opacity:0.6}});$.post(FUE.ajaxurl,{action:'fue_update_account_subscriptions',lists:ids},function(){$(".fue-subscriptions-message").show();$(".follow-up-subscriptions").unblock()});return!1})})