#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int threeSumClosest(int* nums, int numsSize, int target);

int main(){
    int nums[] = {-1,2,1,-4};
    int target = 1;

    printf("%d\n", threeSumClosest(nums, 4, target));
}


//naive aproach O(n^3)
int threeSumClosest(int* nums, int numsSize, int target){
    
    int closest = nums[0] + nums[1] + nums[2];
    for(int i = 0; i < numsSize-2; i++){
    
        for(int j = i + 1; j < numsSize-1; j++){

            for(int k = j + 1; k < numsSize; k++){
                int sum = nums[i] + nums[j] + nums[k];
                if(sum == target)
                    return sum;
                if(abs(sum - target) < abs(closest - target))
                    closest = sum;
            }

        }

    }



    return closest;

}
