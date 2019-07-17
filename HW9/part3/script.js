let changeClass = ( classname, styleString ) => (
    Array.from(document.styleSheets)
      .filter(sheet => Array.from(sheet.cssRules)
          .find(item => {
              item.selectorText === classname 
                  ? document.styleSheets.insertRule(styleString) : null
          })
)).length > 0 ? console.log ( "found" ) :
    document.head.appendChild (
        document.createElement ( "style" )
    ).textContent = `.${classname} {${styleString}}`

changeClass (
  "second-level-menu",
  "background-color: red!important;"
)