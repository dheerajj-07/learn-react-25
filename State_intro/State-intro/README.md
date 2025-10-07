1. what are react hooks?

    React hooks kuch functions hote hain jo ki hme react ke andr rehte huye functional components ke andr react ke features access krne me help krte hain.

    HOOKS in general are some functions 


2. useState fuction(Hook)---
    useState jo bhi value update ho rhi hai usko bhi update krta chla jata hai.... Agr hum useState k through count variable ko change krenge toh jha jha count variable hai vha sabhi jgha count update hoga...

3. useEffect Hook-----
    useEffect ek react hook hota hai jo ki side effects dene k kaam aata hai..... useEffect ek react hook hota hai jo ki ek component ke mount hone pr chta hai.

    Case 1. Run on every render
        useEffect(()=>{
            alert("i will run on every render")
        })

    Case 2.  Run only on first render
        useEffect(()=>{
            alert("i will run on first render")
        }, [])

    Case 3, Run only when certain values changes
        useEffect(()=>{
            alert("Color was changed")
            setColor(color+1)
        }, [count])

4. useRef Hook ----
     useRef use krne se component rerender toh hota hai but useRef ki use se hmari useRef vali values trigger / change nhi hoti.

     ex- useRef(0).... jab bhi component rerender hoga toh iski value same rhegi, agr hum iski value update krenge toh rerender hone k baad dubara 0 nhi show hoga, updated value show hogi

     in short--- agr hmne state ko change kr dia toh component rerender hota hai, lekin agr hmne ref ko change kr dia toh component rerender nhi hota


    
