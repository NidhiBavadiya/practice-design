$(document).ready(function() {

    var options = {
      html: true,
      title: "Optional: HELLO(Will overide the default-the inline title)",
      //html element
      //content: $("#popover-content")
      content: $('[data-name="popover-content"]')
      //Doing below won't work. Shows title only
      //content: $("#popover-content").html()
    
    }
    var exampleEl = document.getElementById('popover-btn')
    var popover = new bootstrap.Popover(exampleEl, options)
    })