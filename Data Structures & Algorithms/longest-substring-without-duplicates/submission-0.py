class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxlen = 0

        for i in range(n):
            hash_map = [0] * 256

            for j in range(i,n):
                char_code = ord(s[j])

                if hash_map[char_code] == 1: 
                    break

                length = j - i + 1
                maxlen = max(length, maxlen)
                hash_map[char_code] = 1
        
        return maxlen