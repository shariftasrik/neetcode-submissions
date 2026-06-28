class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;

        HashMap<Character, Integer> map_s = new HashMap<>();
        HashMap<Character, Integer> map_t = new HashMap<>();

        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);
            map_s.put(ch, map_s.getOrDefault(ch, 0) + 1);
        }

        for(int i=0; i<t.length(); i++){
            char ch = t.charAt(i);
            map_t.put(ch, map_t.getOrDefault(ch, 0) + 1);
        }

        for(char key : map_s.keySet()){
            if(!map_s.get(key).equals(map_t.getOrDefault(key, 0))){
                return false;
            }
        }

        return true;
    }
}
