import hashlib

# Hash the string "2" using MD5
result = hashlib.md5(b"10").hexdigest()
print(result)  # Output: c81e728d9d4c2f636f067f89cc14862