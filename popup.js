chrome.tabs.query({active:true,currentWindow:true},function(tabs){

    chrome.tabs.executeScript(
      {code:'(Array.from(document.getElementsByTagName("a"))).map(link=>link.href)'},
      function(result){
        let arr=result[0]
  
        const parentDiv=document.getElementById("allLinks")
  
        for(i=0;i<arr.length;i++){
          const newEle=document.createElement("a")
          const br=document.createElement("br")
  
          newEle.href=arr[i]
          newEle.innerText=arr[i]
          parentDiv.appendChild(newEle)
          parentDiv.appendChild(br)
        }
  
      }
    )
  
  
  })