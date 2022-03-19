/* 
- High Level structure of browser based JS:
    JS:
        Core JS
        APIs:
            Browser APIs:
                DOM: Manipulate html, css
                Geolocation: retrieves geographcial location
                Canvas and WebGL: Create animated 2d and 3d graphics
                Audio/Video API: multimedia
            Third party APIs:

*/
/* 
- Browser tabs run in separate execution environments.
- async and defer: async - script loading will not block following scripts from loading, defer - script loading will block following scripts from loading                 

*/

/*
    Datatypes and Ops:
    variables: 
        - let vs var:
            var: var is global scope, variables can be used before declaration. THis causes issues.  
            let: let is local scope, variables should be declared before use.
            
            - types of values: String, Number, Array, Object, Boolean etc.
            
            Object - Standalone entity with properties and type
            
            Every datatype in JS inherits from Object(),
                * To list the functions available on an object, print obj.__proto__
            
        Numbers and Operations:
            types: float, integer, double
                * Integer is actually a floating point but with no decimal.
                e.g.: 10/3 give 3.333...
            * Number() object represents all nstandard numbers in JS
                Its __proto__ contains method such as toExponential, toFixed etc.
            * Automatic type conversion of expressions:
                In an arithmetic expression, numbers can change its type:
                    '21'+1 = '211'
                    '21'-1 = 20
                Exponent operator: **
                    2**3 = 8
            * JS convert string to a number:
                - Number("23")
                - Unary '+' - +"23"
                - parseInt("23")
                - 1* "23"
        String:
            Convert an object/array/number etc to string: toString(obj)
                * provided toString is defined
            Methods:
                length:             .length : Number 
                contains:           .includes(substring) : Boolean
                starts/ends with:   .startsWith(sub) : Boolean
                substring:          .slice(start, end+1) : String
                replace:            .replace(originalSubstring, newSubstring) : String
                uppercase/lowercase:.toUpperCase : String
                    
*/

