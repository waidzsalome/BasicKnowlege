# 修改图片宽度为300px

```html
<img src="1.jpg" style="width:480px!important;" />
```

可实现方案
```css
{

    max-width: 300px;
    /*偏向左上*/
    transform: scale(0.625,0.625) ;
    /*会改变图片的位置。偏向右下*/
    
    border-sizing: border-box;
    padding: 0 90px; 
    /*偏向右上*/
    
    zoom: 300 / 480; 
    /*应该是按比例缩小了，看起来有点像偏左上*/
}


```
