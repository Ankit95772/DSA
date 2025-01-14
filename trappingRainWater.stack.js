//brute force
let link = 'https://leetcode.com/problems/trapping-rain-water/description/'
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
     let prefixArr = [height[0]]
     let suffixArr = []
     suffixArr[height.length-1] = height[height.length-1]

     for(let i=1;i<height.length;i++){
          prefixArr[i] = Math.max(prefixArr[i-1], height[i])
     }

     for(let i=height.length-2;i>=0;i--){
         suffixArr[i] = Math.max(suffixArr[i+1], height[i])
     }
     let total = 0;
     
     for(let i=0;i<height.length-1;i++){
        let prefixMax = prefixArr[i]
        let suffixMax = suffixArr[i]
        if(height[i]< prefixMax && height[i]<suffixMax){
            total += Math.min(prefixMax,suffixMax)- height[i]
        }
     }
     return total
};

//efficient 

var trap = function(height) {
     let l = 0;
     let r = height.length-1;
     let total =0;
     let leftMax = 0;
     let rightMax =0;

     while(l<r){
        if(height[l]<=height[r]){
             if(height[l]<leftMax){
               total += leftMax- height[l]
             }else{
                leftMax = height[l]
             }
             l++;
        }else{
           if(height[r]<rightMax){
               total += rightMax- height[r]
             }else{
                rightMax = height[r]
             } 
             r--;  
        }

     }

     return total
};
