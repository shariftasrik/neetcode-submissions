class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] hash = new int[256];
        Arrays.fill(hash, -1);

        int l=0, r=0, maxlen = 0;
        int n = s.length();

        while(r < n){
            char currentChar = s.charAt(r);

            if(hash[currentChar] != -1){
                if(hash[currentChar] >= l){
                    l = hash[currentChar] + 1;
                }
            }

            int len = r - l + 1;
            maxlen = Math.max(len, maxlen);
            hash[currentChar] =  r;
            r++;
        }
        return maxlen;
    }
}
