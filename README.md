# alert-jquery

A plugin for simple and beautiful alert

# Usage

```
$('#btn').on('click',function(){
    $.alert({
        message:'This is new alert !',
        type:'success',
        position:'bottom-left',
        animation:'slidein'
    });
});
```

# Options
**type**: success, danger, warning

**position**: top-right, bottom-right, top-left, bottom-left

**animation**: slidein,fadein
