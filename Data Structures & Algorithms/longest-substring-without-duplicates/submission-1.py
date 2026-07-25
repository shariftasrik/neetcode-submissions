class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        hash_map = [-1] * 256
        l = r = maxlen = 0
        n = len(s)

        while r < n :
            char_code = ord(s[r])

            if hash_map[char_code] != -1:
                if hash_map[char_code] >= l:
                    l = hash_map[char_code] + 1

            length = r - l + 1
            maxlen = max(length, maxlen)
            hash_map[char_code] = r
            r = r + 1
        
        return maxlen
        