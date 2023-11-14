const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]
  
  
  function fitsInOneBox(boxes) {
    
    let box= []
    
    for(let i=0; i <= 2; i++){
       let side = i == 0 ? 'l' : i == 1 ? 'w' : 'h'
       box.push(boxes.map(box => box[side]))
    }
    
    console.log(box)
    for(const boxSides of box){
        //[1,2,3],[1,2,1],[1,2,3]
        console.log(boxSides)
        for(const [index, side] of boxSides.entries()){
            //1,2,3
            let sidesExclude = boxSides.filter((val, i) => i !== index);
  
            for(let i=0; i < sidesExclude.length; i++){
              //   console.log(boxSides[i])
                if(side > sidesExclude[i + 1]){
                    console.log(side + ', ' + sidesExclude[i + 1])
                }
            }
         //console.log(side)
        }
    }
    
    function checkSides(arr){
        
    }
    
    
  }
  
  fitsInOneBox(boxes)