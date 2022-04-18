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
- async and defer: async - script loading will not block following scripts from loading, 
  defer - script loading will block following scripts from loading                 
*/


/*
Note: Predicate in JS is a callback functions which returns a boolean
    e.g. (obj)=> obj.name === "name to find"

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
            Convert an object/array/number etc to string: .toString(RADIX)
            Where radix by default is 10
            It can be anything such as 2, 8, 16 etc.
            Number(2).toString(2) = '10'
                * provided toString is defined
            Methods:
                length:             .length : Number 
                contains:           .includes(substring) : Boolean
                starts/ends with:   .startsWith(sub) : Boolean
                substring:          .slice(start, end+1) : String
                replace:            .replace(originalSubstring, newSubstring) : String
                uppercase/lowercase:.toUpperCase : String
                split a string:     .split(string) : Array
        Arrays:
            Arrays are of object type which contains:
                list of objects (Numbers, Strings etc), which need not be of the same type.
            Tip: Arrays are optimized by V8 once they are initialized(in case using nodeJS)
                i.e. if the objects assigned inside an array are all of same type, V* treats it like PACKED_ELEMENTS
                This allows faster operations.
                So: Do not access arrays beyond "arr.length". This will slow the optimization the engine may apply.
            Modification of elements:
                arr[i] = newValue
                * Suppose we have an array : [1,2,3,4,5]
                and we assign: a[10] = 23
                final array will be: [1,2,3,4,5,undefinedx5,23]
            Methods:
                length:                 .length : Number
                finding items:          .indexOf(element) : Number
                Adding elements(end):   .push(ele) : Size of new array
                Adding elements(start): .unshift(ele) : Size of new array
                Remove(beg):            .shift() : Element  Removed
                Remove(end):            .pop() : Element Removed
                Return element:         .find(predicate) : Object
                Convert to string:      .toString()
                Convert to string:      .join(join string) 
            Methods that generate a new array: 
                Return array after removing R elements from index:
                    splice(index, R)
                Return array from start to end:
                    slice(start, end)
                Return array with new value which is somehow related to every element:
                    map((element)=>modifier(element))
                Filter:
                    filter(predicate)

            Iteration:
                for ( ele of arr)
                    // do something with ele
        


*/
/*
    JS Builidng BLocks:
        Conditionals:
            * boolean true: 
                anything that's not false, undefined, NaN, Null, 0 or an empty string('')
        Loops:
            for...of loops:
                for(item of arr)
                    //do something
            functions:
                anonymous function:
                    function(){}
                    this type of function can be used to pass as a callback
                scope:
                    when invoking multiple files, try limiting variable scope inside functions which will save from lot of unexpected issues
                events:
                    * definition: actions within a program (like user input, http request received, process completion, data load etc. ) 
                      handler: events are generally are monitored by specific functions known as event handlers which fire some other function in response to an event
                      events are not present in core JS. Generally, they come as a part of APIs.
                    * addEventListener(event, action) : This is an object method which calls action when event occurs. 
                      this is available as part of the browser API. 
                    * some examples of events:
                        click: 
                        focus and blur: switch to another tab triggers blur, switching to the tab in question triggers focus
                        mouseover /mouseout:
                    Removing the Events: when there are too many elements with events attached, it may slow down the application. 
                    For that, we can remove the events using two ways:
                        * obj.removeEventListener(event, action): removes the event listener associated with the object 
                        AbortSignal: add signal to all the events and abort them at once.
                            controller = new AbortController()
                            addEventListener(event, action, {signal:controller.signal})
                            ...
                            controller.abort() // will remove events from all the listeners where signal is added
                                                

*/

