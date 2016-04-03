var data = []
var screen = $('#screen')

function render() {
  html = data.reduce(function(memo, x) {
    return memo + '<div class="box">'+x+'</div>'
  }, '')
  screen.html(html)
}

function init() {
  $('input[type="button"]').click(function(event) {
    var value = $('input[type="textarea"]').val()
    switch (event.target.name) {
      case 'left-push':
        data.unshift(value)
        break;
      case 'right-push':
        data.push(value)
        break;
      case 'left-pop':
        data.shift(value)
        break;
      case 'right-pop':
        data.pop(value)
        break;
    }
    $('input[type="textarea"]').val('')
    render()
  })
}

init()
