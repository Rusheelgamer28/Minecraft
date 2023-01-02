var canvas = new fabric.Canvas("myCanvas")

player_x = 20;
player_y = 20;

block_width= 30;
block_height= 30;

function player_update()
{
fabric.Image.fromURL("player.png" , function(img){
    player_object = img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({top:player_y,
    left:player_x
})
canvas.add(player_object)
})

}

player_update()


function block_update(hi)
{
    fabric.Image.fromURL(hi , function(img){
        block_object = img;

        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object);
    })
}

// block_update("yellow_wall.png")


// block_update("wall.jpg")

window.addEventListener("keydown", keydown)

function keydown(e)
{
    var keyE = e.keyCode
    console.log("hello")
    console.log(keyE)
    var shift = e.shiftKey
    console.log(e)
    
    if(keyE == "80" && shift == true)
    {
      block_width = block_width + 10
      block_height = block_height + 10 
      document.getElementById("width").innerHTML = block_width
      document.getElementById("height").innerHTML = block_height
    }

    if(keyE == "77" && shift == true)
    {
        block_width = block_width - 10
        block_height = block_height - 10 
        document.getElementById("width").innerHTML = block_width
        document.getElementById("height").innerHTML = block_height

    }
    if(keyE == "40")
    {
        console.log("down")
        down();
    }
    if(keyE == "38")
    {
        console.log("up")
        up()
    }

    if(keyE == "39")
    {
        console.log("right")
        right()
    }

    if(keyE == "37")
    {
        console.log("left")
        left()
    }


    if(keyE == "87")
    {
        block_update("trunk.jpg")

    }
  
    if(keyE == "68")
    {
        block_update("dark_green.png")
        
    }
  
    if(keyE == "76")
    {
        block_update("light_green.png")
        
    }

    if(keyE == "71")
    {
        block_update("ground.png")
        
    }
  
    
    if(keyE == "66")
    {
        block_update("wall.jpg")
        
    }
  
    
    if(keyE == "89")
    {
        block_update("yellow_wall.png")
        
    }
  
    
    if(keyE == "82")
    {
        block_update("roof.jpg")
        
    }
    
    if(keyE == "67")
    {
        block_update("cloud.jpg")
        
    }
    
    
    if(keyE == "85")
    {
        block_update("unique.png")
        
    }
}

function down()
{
    if(player_y <= 610)
    {
        player_y = player_y + block_height
        console.log("height of player is=" + player_y )
        canvas.remove(player_object)
        player_update();
    }
}

function up()
{
    if(player_y >= 0)
    {
        player_y = player_y - block_height
        canvas.remove(player_object)
        player_update()
    }
}

function left()
{
    if(player_x >= 0)
    {
        player_x = player_x - block_width
        canvas.remove(player_object)
        player_update()
    }
}

function right()
{
    if(player_x <= 1100)
    {
        player_x = player_x + block_width
        canvas.remove(player_object)
        player_update()
    }
}