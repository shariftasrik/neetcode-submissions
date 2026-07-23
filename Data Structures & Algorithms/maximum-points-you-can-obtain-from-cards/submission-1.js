class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
        let lsum=0;
        let rsum=0;
        let maxsum=0;
        let rindex = cardPoints.length - 1;

        for(let i = 0; i<k; i++){
            lsum += cardPoints[i];
        }
        maxsum = lsum;

        for(let i=k-1; i>=0; i--){
            lsum -= cardPoints[i];
            rsum += cardPoints[rindex];
            rindex--;

            maxsum = Math.max(maxsum , lsum+rsum);
        }
        return maxsum;
    }
}
