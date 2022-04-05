class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string){
    string = string.replaceAll( /[^A-Za-z0-9 '-]/g, '' )
      return string
    
  }
  static titleize (string){
      let wordsThrough = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let result = []
      let arr = string.split(" ")
      for( let i = 0; i < arr.length; i++) {
        if (i == 0){
          result.push(this.capitalize(arr[i]))
        }else {
          if (wordsThrough.includes(arr[i])){
            result.push(arr[i])
          }else {
            result.push(this.capitalize(arr[i]))
          }
        }
      }
      return result.join(" ")
    }
  }
