class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const map_s = {};
        const map_t = {};

        for (let char of s){
            map_s[char] = (map_s[char] || 0) + 1;
        }

        for (let char of t){
            map_t[char] = (map_t[char] || 0) + 1;
        }

        for(let key in map_s){
            if(map_s[key] !== (map_t[key] || 0)){
                return false;
            }
        }
        return true;
    }
}
