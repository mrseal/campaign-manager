(function(){$(document).ready(function(){var e,t,i,a;return console.log("Loading banners coffeescript"),$("select.nosearch").select2({allowClear:!0,placeholder:"Select an option",minimumResultsForSearch:1/0,width:"100%"}),$("select.search_rules").select2({tags:!1,allowClear:!0,multiple:"multiple",placeholder:"select multiple entries, enter text to filter list",width:"100%"}),$("#editor_container").length>0&&(i=ace.edit("editor"),i.setShowPrintMargin(!1),i.setTheme("ace/theme/chrome"),i.getSession().setUseWorker(!1),i.getSession().setMode("ace/mode/html"),i.getSession().setUseWrapMode(!0),i.setValue($('textarea[name="banner[htmltemplate]"]').val()),i.clearSelection(),i.focus(),i.resize(),$("form").submit(function(){var e;return e=i.getValue(),$('textarea[name="banner[htmltemplate]"]').val(e)}),$("#editor_container").resizable({resize:function(){return i.resize()}})),$(".datepicker").datetimepicker({format:"MM/DD/YYYY HH:mm",sideBySide:!0}),$('select[name="banner[campaign_id]"').on("change",function(){var e;return e=$(this).val(),$.ajax("/getCampaignDates",{type:"GET",data:{id:e},success:function(e){return e=JSON.parse(e),$('input[name="interval_start"]').val(e.start).change(),$('input[name="interval_end"]').val(e.end).change()}}),$.ajax("/getExchangeAttributes",{type:"GET",data:{id:e},success:function(e){return $("#exchange_attributes_div").html(e),$("select.nosearch").select2({allowClear:!0,placeholder:"Select an option",minimumResultsForSearch:1/0,width:"100%"}),$("select.search_rules").select2({tags:!1,allowClear:!0,multiple:"multiple",placeholder:"select multiple entries, enter text to filter list",width:"100%"})}})}),t=[0,1,2,3,4],e=[5,6,7],$("#listtable").DataTable({dom:"Bfrtip",paging:!1,order:[[0,"asc"]],columnDefs:[{targets:e,visible:!0,sortable:!1,className:"noVis"},{targets:t,visible:!0,sortable:!0}],colReorder:!0,fixedHeader:!0,stateSave:!0,buttons:[{extend:"colvis",className:"btn-xs",columns:t,postfixButtons:["colvisRestore"]},{extend:"copyHtml5",className:"btn-xs",columns:t},{extend:"csvHtml5",className:"btn-xs",columns:t}]}),a='<tr><td><input type="text" class="form-control input-sm" name="deal_id[]"  value=""/></td>',a+='<td><div class="input-group input-group-sm">',a+='<span class="input-group-addon">$</span><input type="text" class="form-control input-sm" name="deal_price[]"  value=""/>',a+="</div></td>",a+='<td style="vertical-align:middle"><span class="input-sm"><span class="glyphicon glyphicon-plus-sign tableRowAdd"></span></span>',a+='<span class="input-sm"><span class="glyphicon glyphicon-minus-sign tableRowRemove"></span></span>',a+="</td></tr>",$("#deals_table").on("click",".tableRowRemove",function(){return $(this).closest("tr").remove()}),$("#deals_table").on("click",".tableRowAdd",function(){return $(this).closest("tr").after(a)}),$("input[type=radio][name=deal_type]").on("change",function(){var e;return e=$(this).val(),"none"===e?$("#deals_table_div").hide():($("#deals_table_div").show(),"private_only"===e?$('input[name="banner[bid_ecpm]"]').val("0"):void 0)}),$("input[type=radio][name=size_match_type]").on("change",function(){var e;return e=$(this).val(),"none"===e?($("#width_height_only_div").hide(),$("#width_height_range_div").hide(),$("#width_height_list_div").hide()):"width_height_only"===e?($("#width_height_only_div").show(),$("#width_height_range_div").hide(),$("#width_height_list_div").hide()):"width_height_range"===e?($("#width_height_only_div").hide(),$("#width_height_range_div").show(),$("#width_height_list_div").hide()):"width_height_list"===e?($("#width_height_only_div").hide(),$("#width_height_range_div").hide(),$("#width_height_list_div").show()):void 0})})}).call(this);