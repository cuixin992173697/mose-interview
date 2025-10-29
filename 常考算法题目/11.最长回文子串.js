function getLongestPalindrome( A ) {
    // write code here
    if(A.length < 2) return A.length

    let maxLength = 1

    function center(left, right) {
        while(left >= 0 && right < A.length && A[left] === A[right]) {
            left--
            right++
        }
        return right - left -1
    }

    for(let i = 0; i < A.length; i++) {
        const len1 = center(i, i)
        const len2 = center(i, i+1)
        let len = Math.max(len1, len2)
        maxLength = Math.max(len, maxLength)
    }

    return maxLength
}