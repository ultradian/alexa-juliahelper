/* eslint-disable  func-names */
/* eslint-disable max-len */
/* eslint quote-props: ['error', 'consistent']*/
module.exports = {
    'RESPONSE_EN_US': {

        'push' : 'To add an item to the end of a collection, use the push function, spelled <prosody rate="slow">p.u.s.h.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the item to push.  <break strength="strong"/> Note that you can add more than one item.',

        'pop': 'To remove the last item of a collection, use the pop function, spelled <prosody rate="slow">p.o.p.</prosody> <say-as interpret-as="spell-out">!</say-as>. The argument is the collection name.',

        'unshift' : 'To add an item to the beginning of a collection, use the unshift function, spelled <prosody rate="x-slow">u.n.s.h.i.f.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the item to add.  <break strength="strong"/> Note that you can add more than one item.',

        'append' : 'To add the contents of one collection to the end of another collection, use the append function, spelled <prosody rate="x-slow">a.p.p.e.n.d.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the main collection and second is the collection of items you are adding.',

        'shift': 'To remove the first item of a collection, use the shift function, spelled <prosody rate="x-slow">s.h.i.f.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The argument is the collection name.',

        'prepend' : 'To add the contents of one collection to the front of another collection, use the prepend function, spelled <prosody rate="slow">p.r.e.p.e.n.d.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the main collection and second is the collection of items you are adding.',

        'deleteat' : 'To remove an item from the middle of an ordered collection, use the delete<prosody rate="x-slow" volume="x-loud">at</prosody> function, spelled <prosody rate="x-slow">d.e.l.e.t.e.a.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the index of the item to remove. <break strength="strong"/> Note that you can specify a range to remove instead of just an integer index.',

        'insert' : 'To add an item at a specific location in a collection, use the insert function, spelled <prosody rate="x-slow">i.n.s.e.r.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name, the second is the index where to add it, and the third is the item to add.',

        'setdiff' : 'To remove the elements of a set B from a set A, use the set<prosody rate="x-slow">diff</prosody> function, spelled <prosody rate="x-slow">s.e.t.d.i.f.f.</prosody>.  The first argument is set A, and the second is set B, which will be removed from A.',

        'union' : 'To combine two sets A and B, use the union function, spelled <prosody rate="x-slow">u.n.i.o.n.</prosody>.  The arguments are the sets to combine.',

        'issubset' : 'To test if set A is a subset of set B, use the <prosody rate="x-slow" volume="x-loud">is</prosody>subset function, spelled <prosody rate="x-slow">i.s.s.u.b.s.e.t.</prosody>.  The first argument is set A, and the second is set B, which may contain or equal A. <break strength="strong"/> Returns a boolean value.',

        'haskey' : 'To test if a key is in a dictionary, use the <prosody rate="x-slow" volume="x-loud">has</prosody>key function, spelled <prosody rate="x-slow">h.a.s.k.e.y.</prosody>.  The first argument is the name of the dictionary, and the second is the key you are looking for. Returns a boolean value.',

        'keys' : 'To get all the keys in a dictionary, use the keys function, spelled <prosody rate="x-slow">k.e.y.s.</prosody>.  The argument is the name of the dictionary. Returns an iterator over the set of keys. If you need an array result instead, wrap the result with a collect function.',

        'values' : 'To get all the values in a dictionary, use the values function, spelled <prosody rate="x-slow">v.a.l.u.e.s.</prosody>.  The argument is the name of the dictionary. Returns an iterator over the set of values. If you need an array result instead, wrap the result with a collect function.',

        'get' : 'To get the value associated with a key in a dictionary, use the get function, spelled <prosody rate="x-slow">g.e.t.</prosody>.  The first argument is the name of the dictionary, the second is the key you are looking up. A default value can be used for the third argument in case the key is not present.',

        'merge' : 'To combine two dictionaries A and B, use the merge function, spelled <prosody rate="x-slow">m.e.r.g.e.</prosody>.  The arguments are the dictionaries to combine.',

        'length' : 'To get the size of a collection, use the length function, spelled <prosody rate="slow">l.e.n.g.t.h.</prosody>.  The argument is the name of the collection.',

        'maximum' : 'To get the largest value in a collection, use the maximum function, spelled <prosody rate="slow">m.a.x.i.m.u.m.</prosody>.  The argument is the name of the collection.',

        'minimum' : 'To get the smallest value in a collection, use the minimum function, spelled <prosody rate="slow">m.i.n.i.m.u.m.</prosody>.  The argument is the name of the collection.',

        'extrema' : 'To get both the smallest and largest values in a collection, use the extrema function, spelled <prosody rate="slow">e.x.t.r.e.m.a.</prosody>.  The argument is the name of the collection. Returns a tuple of smallest and largest.',

        'isempty' : 'To test if a collection is empty, use the <prosody rate="x-slow" volume="x-loud">is</prosody>empty function, spelled <prosody rate="x-slow">i.s.e.m.p.t.y.</prosody>.  The argument is the name of the collection. Returns a boolean value.',

        'in' : 'To test if an item is in a collection, use the <prosody rate="x-slow" volume="x-loud">in</prosody> function, spelled <prosody rate="x-slow">i.n.</prosody>.  The first argument is the item you are looking for, and the second is the name of the collection. If you are looking for a key in a dictionary, use the <prosody rate="x-slow" volume="x-loud">has</prosody>key function.',

        'any' : 'To test if any elements of a collection satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">any</prosody> function, spelled <prosody rate="x-slow">a.n.y.</prosody>.  The first argument is the predicate function, and the second is the name of the collection. Returns a boolean value.',

        'count' : 'To count how many elements of a collection satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">count</prosody> function, spelled <prosody rate="x-slow">c.o.u.n.t.</prosody>.  The first argument is the predicate function, and the second is the name of the collection.',

        'filter' : 'To get the elements of a collection that satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">filter</prosody> function, spelled <prosody rate="x-slow">f.i.l.t.e.r.</prosody>.  The first argument is the predicate function, and the second is the name of the collection. Returns a new collection, unless you add an <say-as interpret-as="spell-out">!</say-as> which will modify the original collection.',

        'sum' : 'To get the sum of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody> function, spelled <prosody rate="x-slow">s.u.m.</prosody>.  The argument is the name of the collection.',

        'sumabs' : 'To get the sum of the absolute values of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody><prosody rate="x-slow" volume="x-loud">abs</prosody> function, spelled <prosody rate="x-slow">s.u.m.a.b.s.</prosody>.  The argument is the name of the collection. It is faster than applying the sum and the abs functions separately.',

        'sumabs2' : 'To get the sum of the squares of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody><prosody rate="x-slow" volume="x-loud">abs2</prosody> function, spelled <prosody rate="x-slow">s.u.m.a.b.s.</prosody>2.  The argument is the name of the collection. It is faster than applying the sum and the abs2 functions separately.',

        'prod' : 'To get the product of all of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">prod</prosody> function, spelled <prosody rate="x-slow">p.r.o.d.</prosody>.  The argument is the name of the collection.',

        'unique' : 'To get rid of duplicates in a collection, use the <prosody rate="x-slow" volume="x-loud">unique</prosody> function, spelled <prosody rate="x-slow">u.n.i.q.u.e.</prosody>.  The argument is the name of the collection. Returns an array of unique values.',

        'map' : 'To apply a function to all elements of a collection, use the <prosody rate="x-slow" volume="x-loud">map</prosody> function, spelled <prosody rate="x-slow">m.a.p.</prosody>.  The first argument is the applied function, and the second is the name of the collection. Returns a new collection, unless you add an <say-as interpret-as="spell-out">!</say-as> after <prosody rate="x-slow">m.a.p.</prosody>, which will modify the original collection.',

        'first' : 'To get the first element of an ordered collection, use the <prosody rate="x-slow" volume="x-loud">first</prosody> function, spelled <prosody rate="x-slow">f.i.r.s.t.</prosody>.  The argument is the name of the collection.',

        'last' : 'To get the last element of an ordered collection, use the <prosody rate="x-slow" volume="x-loud">last</prosody> function, spelled <prosody rate="x-slow">l.a.s.t.</prosody>.  The argument is the name of the collection.',

        'fld' : 'To perform flooring division of X divided by Y, use the <prosody rate="x-slow" volume="x-loud">fld</prosody> function, spelled <prosody rate="x-slow">f.l.d.</prosody>. The first argument is X and the second is Y, which is divided into X.',

        'mod' : 'To get the modulus of flooring division of X divided by Y, use the <prosody rate="x-slow" volume="x-loud">mod</prosody> function, spelled <prosody rate="x-slow">m.o.d.</prosody>. The first argument is X and the second is Y, which is divided into X.',

        'mod2pi' : 'To get the modulus after dividing by 2 pi, use the <prosody rate="x-slow" volume="x-loud">mod2pi</prosody> function, spelled <prosody rate="x-slow">m.o.d.</prosody>2<prosody rate="x-slow">p.i.</prosody>. The argument is the number to be divided by 2 pi.',

        'range' : 'To specify a range of a particular length, use the <prosody rate="x-slow" volume="x-loud">range</prosody> function, spelled <prosody rate="x-slow">r.a.n.g.e.</prosody>. The first argument is the start of the range and the second is the length. An optional step parameter can be inserted between the two. If you want to specify the end of the range, use the colon function instead.',

        'colon' : 'To specify a range, use the <prosody rate="x-slow" volume="x-loud">colon</prosody> function, spelled <prosody rate="x-slow">c.o.l.o.n.</prosody>. Or, use colon syntax.  The first argument is the start of the range and the second is the end. An optional step parameter can be inserted between the two. If you want to specify the length of the range, use the range function instead.',

        'min' : 'To find the smallest value among multiple arguments, use the <prosody rate="x-slow" volume="x-loud">min</prosody> function, spelled <prosody rate="x-slow">m.i.n.</prosody>.',

        'max' : 'To find the largest value among multiple arguments, use the <prosody rate="x-slow" volume="x-loud">max</prosody> function, spelled <prosody rate="x-slow">m.a.x.</prosody>.',

        'abs' : 'To find the absolute value of an argument, use the <prosody rate="x-slow" volume="x-loud">abs</prosody> function, spelled <prosody rate="x-slow">a.b.s.</prosody>.',

        'clamp' : 'To force an argument into a bounded range, use the <prosody rate="x-slow" volume="x-loud">clamp</prosody> function, spelled <prosody rate="x-slow">c.l.a.m.p.</prosody>. The first argument is the number which is returned unless it is below the low bound - second argument, or above the high bound - third argument, in which case the boundary is returned.',

        'sign' : 'To get the sign of an argument, use the <prosody rate="x-slow" volume="x-loud">sign</prosody> function, spelled <prosody rate="x-slow">s.i.g.n.</prosody>.',

        'sqrt' : 'To get the square root of an argument, use the <prosody rate="x-slow" volume="x-loud">sqrt</prosody> function, spelled <prosody rate="x-slow">s.q.r.t.</prosody>.',

        'real' : 'To get the real part of a complex argument, use the <prosody rate="x-slow" volume="x-loud">real</prosody> function, spelled <prosody rate="x-slow">r.e.a.l.</prosody>.',

        'imag' : 'To get the imaginary part of a complex argument, use the <prosody rate="x-slow" volume="x-loud">imag</prosody> function, spelled <prosody rate="x-slow">i.m.a.g.</prosody>.',

        'conj' : 'To get the complex conjugate of a complex argument, use the <prosody rate="x-slow" volume="x-loud">conj</prosody> function, spelled <prosody rate="x-slow">c.o.n.j.</prosody>.',

        'ispow2' : 'To test if an argument is a power of 2, use the <prosody rate="x-slow" volume="x-loud">is</prosody>pow2 function, spelled <prosody rate="x-slow">i.s.p.o.w.</prosody>2.  Returns a boolean value.',

        'nextpow2' : 'To get the smallest power of 2 that is greater than or equal to an integer argument, use the <prosody rate="x-slow" volume="x-loud">nextpow2</prosody> function, spelled <prosody rate="x-slow">n.e.x.t.p.o.w</prosody>2. Returns 0 for 0 argument, and negative value for negative arguments.',

        'prevpow2' : 'To get the largest power of 2 that is less than or equal to an integer argument, use the <prosody rate="x-slow" volume="x-loud">prevpow2</prosody> function, spelled <prosody rate="x-slow">p.r.e.v.p.o.w</prosody>2. Returns 0 for 0 argument, and negative value for negative arguments.',

        'mean' : 'To get the mean of the values in an array, use the <prosody rate="x-slow" volume="x-loud">mean</prosody> function, spelled <prosody rate="x-slow">m.e.a.n.</prosody>.',

        'std' : 'To get the standard deviation of the values in an array, use the <prosody rate="x-slow" volume="x-loud">std</prosody> function, spelled <prosody rate="x-slow">s.t.d.</prosody>.',

        'median' : 'To get the median of the values in an array, use the <prosody rate="x-slow" volume="x-loud">median</prosody> function, spelled <prosody rate="x-slow">m.e.d.i.a.n.</prosody>.',

        'fft' : 'To get the multidimensional fast Fourier transform of the values in an array, use the <prosody rate="x-slow" volume="x-loud">fft</prosody> function, spelled <prosody rate="x-slow">f.f.t.</prosody>.',

        'conv' : 'To get the convolution of two vectors, use the <prosody rate="x-slow" volume="x-loud">conv</prosody> function, spelled <prosody rate="x-slow">c.o.n.v.</prosody>.',

        'parse' : 'To convert a string number to a numeric value, use the <prosody rate="x-slow" volume="x-loud">parse</prosody> function, spelled <prosody rate="x-slow">p.a.r.s.e.</prosody>. The first argument is the type to convert to, like Int or Float, and the second is the string to convert.',

        'float' : 'To convert a number or array of numbers to floats, use the <prosody rate="x-slow" volume="x-loud">float</prosody> function, spelled <prosody rate="x-slow">f.l.o.a.t.</prosody>.',

        'isodd' : 'To test if an argument is odd, use the <prosody rate="x-slow" volume="x-loud">is</prosody>odd function, spelled <prosody rate="x-slow">i.s.o.d.d.</prosody>.  Returns a boolean value.',

        'iseven' : 'To test if an argument is even, use the <prosody rate="x-slow" volume="x-loud">is</prosody>even function, spelled <prosody rate="x-slow">i.s.e.v.e.n.</prosody>.  Returns a boolean value.',

        'rand' : 'To generate a random number in a particular range, use the <prosody rate="x-slow" volume="x-loud">rand</prosody> function, spelled <prosody rate="x-slow">r.a.n.d.</prosody>.  The argument can be a range or a collection or even a type.  If type Float64 is used, you get a value from zero to one, excluding one.',

        'lengthString' : 'To get the length of a string, use the length function, spelled <prosody rate="slow">l.e.n.g.t.h.</prosody>.',

        'concatenate' : 'To concatenate two strings, use the <say-as interpret-as="spell-out">*</say-as> function, using the <say-as interpret-as="spell-out">*</say-as> character.',

        'grapheme' : 'To iterate over the characters of a string, use the grapheme function, spelled <prosody rate="slow">g.r.a.p.h.e.m.e.</prosody>.',

        'ismatch' : 'To test if a regular expression matches a string, use the <prosody rate="x-slow" volume="x-loud">is</prosody>match function, spelled <prosody rate="x-slow">i.s.m.a.t.c.h.</prosody>.  The first argument is the regular expression and the second is the string being searched.  Returns a boolean value.',

        'matchall' : 'To get all the regular expression matches with a string, use the match<prosody rate="x-slow" volume="x-loud">all</prosody> function, spelled <prosody rate="x-slow">m.a.t.c.h.a.l.l.</prosody>.  The first argument is the regular expression and the second is the string being searched.  Returns a vector of all matching substrings.',

        'search' : 'To find where characters match in a string, use the search function, spelled <prosody rate="x-slow">s.e.a.r.c.h.</prosody>.  The first argument is the string being searched and the second is the character or string to look for.  Returns a range of indicies where the first match occured, with the range zero to negative one if there is no match. An additional argument can specify which index to start the search from. To reverse the search direction, use the <prosody rate="x-slow" volume="x-loud">r</prosody>search function.',

        'reverse' : 'To reverse the order of the characters of a string, use the reverse function, spelled <prosody rate="slow">r.e.v.e.r.s.e.</prosody>.',

        'contains' : 'To test if a string contains a particular substring, use the contains function, spelled <prosody rate="x-slow">c.o.n.t.a.i.n.s.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'startswith' : 'To test if a string starts with a particular substring, use the startswith function, spelled <prosody rate="x-slow">s.t.a.r.t.s.w.i.t.h.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'endswith' : 'To test if a string ends with a particular substring, use the endswith function, spelled <prosody rate="x-slow">e.n.d.s.w.i.t.h.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'isascii' : 'To test if all characters in a string are ascii, use the <prosody rate="x-slow" volume="x-loud">is</prosody>ascii function, spelled <prosody rate="x-slow">i.s.a.s.c.i.i.</prosody>. Returns a boolean value.',

        'isdigit' : 'To test if all characters in a string are numeric digits, use the <prosody rate="x-slow" volume="x-loud">is</prosody>digit function, spelled <prosody rate="x-slow">i.s.d.i.g.i.t.</prosody>. Returns a boolean value.',

        'isspace' : 'To test if all characters in a string are whitespace characters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>space function, spelled <prosody rate="x-slow">i.s.s.p.a.c.e.</prosody>. Returns a boolean value.',

        'isupper' : 'To test if all characters in a string are uppercase letters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>upper function, spelled <prosody rate="x-slow">i.s.u.p.p.e.r.</prosody>. Returns a boolean value.',

        'islower' : 'To test if all characters in a string are lowercase letters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>lower function, spelled <prosody rate="x-slow">i.s.l.o.w.e.r.</prosody>. Returns a boolean value.',

        'size' : 'To get the dimensions of an array, use the <prosody rate="x-slow" volume="x-loud">size</prosody> function, spelled <prosody rate="x-slow">s.i.z.e.</prosody>. Returns a tuple.',

        'vcat' : 'To vertically concatenate two arrays, use the <prosody rate="x-slow" volume="x-loud">v</prosody>cat function, spelled <prosody rate="x-slow">v.c.a.t.</prosody>.',

        'hcat' : 'To horizontally concatenate two arrays, use the <prosody rate="x-slow" volume="x-loud">h</prosody>cat function, spelled <prosody rate="x-slow">h.c.a.t.</prosody>.',

        'find' : 'To find the locations of the elements of an array that satisfy a predicate function, use the find function, spelled <prosody rate="x-slow">f.i.n.d.</prosody>. The first argument is the predicate function and the second is the array name. Returns a vector of the indicies of the elements in the array that satisfy the predicate.',

    },
    
    'RESPONSE_EN_GB': {
        'push' : 'To add an item to the end of a collection, use the push function, spelled <prosody rate="slow">p.u.s.h.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the item to push.  <break strength="strong"/> Note that you can add more than one item.',

        'pop': 'To remove the last item of a collection, use the pop function, spelled <prosody rate="slow">p.o.p.</prosody> <say-as interpret-as="spell-out">!</say-as>. The argument is the collection name.',

        'unshift' : 'To add an item to the beginning of a collection, use the unshift function, spelled <prosody rate="x-slow">u.n.s.h.i.f.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the item to add.  <break strength="strong"/> Note that you can add more than one item.',

        'append' : 'To add the contents of one collection to the end of another collection, use the append function, spelled <prosody rate="x-slow">a.p.p.e.n.d.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the main collection and second is the collection of items you are adding.',

        'shift': 'To remove the first item of a collection, use the shift function, spelled <prosody rate="x-slow">s.h.i.f.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The argument is the collection name.',

        'prepend' : 'To add the contents of one collection to the front of another collection, use the prepend function, spelled <prosody rate="slow">p.r.e.p.e.n.d.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the main collection and second is the collection of items you are adding.',

        'deleteat' : 'To remove an item from the middle of an ordered collection, use the delete<prosody rate="x-slow" volume="x-loud">at</prosody> function, spelled <prosody rate="x-slow">d.e.l.e.t.e.a.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name and second is the index of the item to remove. <break strength="strong"/> Note that you can specify a range to remove instead of just an integer index.',

        'insert' : 'To add an item at a specific location in a collection, use the insert function, spelled <prosody rate="x-slow">i.n.s.e.r.t.</prosody> <say-as interpret-as="spell-out">!</say-as>. The first argument is the collection name, the second is the index where to add it, and the third is the item to add.',

        'setdiff' : 'To remove the elements of a set B from a set A, use the set<prosody rate="x-slow">diff</prosody> function, spelled <prosody rate="x-slow">s.e.t.d.i.f.f.</prosody>.  The first argument is set A, and the second is set B, which will be removed from A.',

        'union' : 'To combine two sets A and B, use the union function, spelled <prosody rate="x-slow">u.n.i.o.n.</prosody>.  The arguments are the sets to combine.',

        'issubset' : 'To test if set A is a subset of set B, use the <prosody rate="x-slow" volume="x-loud">is</prosody>subset function, spelled <prosody rate="x-slow">i.s.s.u.b.s.e.t.</prosody>.  The first argument is set A, and the second is set B, which may contain or equal A. <break strength="strong"/> Returns a boolean value.',

        'haskey' : 'To test if a key is in a dictionary, use the <prosody rate="x-slow" volume="x-loud">has</prosody>key function, spelled <prosody rate="x-slow">h.a.s.k.e.y.</prosody>.  The first argument is the name of the dictionary, and the second is the key you are looking for. Returns a boolean value.',

        'keys' : 'To get all the keys in a dictionary, use the keys function, spelled <prosody rate="x-slow">k.e.y.s.</prosody>.  The argument is the name of the dictionary. Returns an iterator over the set of keys. If you need an array result instead, wrap the result with a collect function.',

        'values' : 'To get all the values in a dictionary, use the values function, spelled <prosody rate="x-slow">v.a.l.u.e.s.</prosody>.  The argument is the name of the dictionary. Returns an iterator over the set of values. If you need an array result instead, wrap the result with a collect function.',

        'get' : 'To get the value associated with a key in a dictionary, use the get function, spelled <prosody rate="x-slow">g.e.t.</prosody>.  The first argument is the name of the dictionary, the second is the key you are looking up. A default value can be used for the third argument in case the key is not present.',

        'merge' : 'To combine two dictionaries A and B, use the merge function, spelled <prosody rate="x-slow">m.e.r.g.e.</prosody>.  The arguments are the dictionaries to combine.',

        'length' : 'To get the size of a collection, use the length function, spelled <prosody rate="slow">l.e.n.g.t.h.</prosody>.  The argument is the name of the collection.',

        'maximum' : 'To get the largest value in a collection, use the maximum function, spelled <prosody rate="slow">m.a.x.i.m.u.m.</prosody>.  The argument is the name of the collection.',

        'minimum' : 'To get the smallest value in a collection, use the minimum function, spelled <prosody rate="slow">m.i.n.i.m.u.m.</prosody>.  The argument is the name of the collection.',

        'extrema' : 'To get both the smallest and largest values in a collection, use the extrema function, spelled <prosody rate="slow">e.x.t.r.e.m.a.</prosody>.  The argument is the name of the collection. Returns a tuple of smallest and largest.',

        'isempty' : 'To test if a collection is empty, use the <prosody rate="x-slow" volume="x-loud">is</prosody>empty function, spelled <prosody rate="x-slow">i.s.e.m.p.t.y.</prosody>.  The argument is the name of the collection. Returns a boolean value.',

        'in' : 'To test if an item is in a collection, use the <prosody rate="x-slow" volume="x-loud">in</prosody> function, spelled <prosody rate="x-slow">i.n.</prosody>.  The first argument is the item you are looking for, and the second is the name of the collection. If you are looking for a key in a dictionary, use the <prosody rate="x-slow" volume="x-loud">has</prosody>key function.',

        'any' : 'To test if any elements of a collection satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">any</prosody> function, spelled <prosody rate="x-slow">a.n.y.</prosody>.  The first argument is the predicate function, and the second is the name of the collection. Returns a boolean value.',

        'count' : 'To count how many elements of a collection satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">count</prosody> function, spelled <prosody rate="x-slow">c.o.u.n.t.</prosody>.  The first argument is the predicate function, and the second is the name of the collection.',

        'filter' : 'To get the elements of a collection that satisfy a predicate, use the <prosody rate="x-slow" volume="x-loud">filter</prosody> function, spelled <prosody rate="x-slow">f.i.l.t.e.r.</prosody>.  The first argument is the predicate function, and the second is the name of the collection. Returns a new collection, unless you add an <say-as interpret-as="spell-out">!</say-as> which will modify the original collection.',

        'sum' : 'To get the sum of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody> function, spelled <prosody rate="x-slow">s.u.m.</prosody>.  The argument is the name of the collection.',

        'sumabs' : 'To get the sum of the absolute values of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody><prosody rate="x-slow" volume="x-loud">abs</prosody> function, spelled <prosody rate="x-slow">s.u.m.a.b.s.</prosody>.  The argument is the name of the collection. It is faster than applying the sum and the abs functions separately.',

        'sumabs2' : 'To get the sum of the squares of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">sum</prosody><prosody rate="x-slow" volume="x-loud">abs2</prosody> function, spelled <prosody rate="x-slow">s.u.m.a.b.s.</prosody>2.  The argument is the name of the collection. It is faster than applying the sum and the abs2 functions separately.',

        'prod' : 'To get the product of all of the elements of a collection, use the <prosody rate="x-slow" volume="x-loud">prod</prosody> function, spelled <prosody rate="x-slow">p.r.o.d.</prosody>.  The argument is the name of the collection.',

        'unique' : 'To get rid of duplicates in a collection, use the <prosody rate="x-slow" volume="x-loud">unique</prosody> function, spelled <prosody rate="x-slow">u.n.i.q.u.e.</prosody>.  The argument is the name of the collection. Returns an array of unique values.',

        'map' : 'To apply a function to all elements of a collection, use the <prosody rate="x-slow" volume="x-loud">map</prosody> function, spelled <prosody rate="x-slow">m.a.p.</prosody>.  The first argument is the applied function, and the second is the name of the collection. Returns a new collection, unless you add an <say-as interpret-as="spell-out">!</say-as> after <prosody rate="x-slow">m.a.p.</prosody>, which will modify the original collection.',

        'first' : 'To get the first element of an ordered collection, use the <prosody rate="x-slow" volume="x-loud">first</prosody> function, spelled <prosody rate="x-slow">f.i.r.s.t.</prosody>.  The argument is the name of the collection.',

        'last' : 'To get the last element of an ordered collection, use the <prosody rate="x-slow" volume="x-loud">last</prosody> function, spelled <prosody rate="x-slow">l.a.s.t.</prosody>.  The argument is the name of the collection.',

        'fld' : 'To perform flooring division of X divided by Y, use the <prosody rate="x-slow" volume="x-loud">fld</prosody> function, spelled <prosody rate="x-slow">f.l.d.</prosody>. The first argument is X and the second is Y, which is divided into X.',

        'mod' : 'To get the modulus of flooring division of X divided by Y, use the <prosody rate="x-slow" volume="x-loud">mod</prosody> function, spelled <prosody rate="x-slow">m.o.d.</prosody>. The first argument is X and the second is Y, which is divided into X.',

        'mod2pi' : 'To get the modulus after dividing by 2 pi, use the <prosody rate="x-slow" volume="x-loud">mod2pi</prosody> function, spelled <prosody rate="x-slow">m.o.d.</prosody>2<prosody rate="x-slow">p.i.</prosody>. The argument is the number to be divided by 2 pi.',

        'range' : 'To specify a range of a particular length, use the <prosody rate="x-slow" volume="x-loud">range</prosody> function, spelled <prosody rate="x-slow">r.a.n.g.e.</prosody>. The first argument is the start of the range and the second is the length. An optional step parameter can be inserted between the two. If you want to specify the end of the range, use the colon function instead.',

        'colon' : 'To specify a range, use the <prosody rate="x-slow" volume="x-loud">colon</prosody> function, spelled <prosody rate="x-slow">c.o.l.o.n.</prosody>. Or, use colon syntax.  The first argument is the start of the range and the second is the end. An optional step parameter can be inserted between the two. If you want to specify the length of the range, use the range function instead.',

        'min' : 'To find the smallest value among multiple arguments, use the <prosody rate="x-slow" volume="x-loud">min</prosody> function, spelled <prosody rate="x-slow">m.i.n.</prosody>.',

        'max' : 'To find the largest value among multiple arguments, use the <prosody rate="x-slow" volume="x-loud">max</prosody> function, spelled <prosody rate="x-slow">m.a.x.</prosody>.',

        'abs' : 'To find the absolute value of an argument, use the <prosody rate="x-slow" volume="x-loud">abs</prosody> function, spelled <prosody rate="x-slow">a.b.s.</prosody>.',

        'clamp' : 'To force an argument into a bounded range, use the <prosody rate="x-slow" volume="x-loud">clamp</prosody> function, spelled <prosody rate="x-slow">c.l.a.m.p.</prosody>. The first argument is the number which is returned unless it is below the low bound - second argument, or above the high bound - third argument, in which case the boundary is returned.',

        'sign' : 'To get the sign of an argument, use the <prosody rate="x-slow" volume="x-loud">sign</prosody> function, spelled <prosody rate="x-slow">s.i.g.n.</prosody>.',

        'sqrt' : 'To get the square root of an argument, use the <prosody rate="x-slow" volume="x-loud">sqrt</prosody> function, spelled <prosody rate="x-slow">s.q.r.t.</prosody>.',

        'real' : 'To get the real part of a complex argument, use the <prosody rate="x-slow" volume="x-loud">real</prosody> function, spelled <prosody rate="x-slow">r.e.a.l.</prosody>.',

        'imag' : 'To get the imaginary part of a complex argument, use the <prosody rate="x-slow" volume="x-loud">imag</prosody> function, spelled <prosody rate="x-slow">i.m.a.g.</prosody>.',

        'conj' : 'To get the complex conjugate of a complex argument, use the <prosody rate="x-slow" volume="x-loud">conj</prosody> function, spelled <prosody rate="x-slow">c.o.n.j.</prosody>.',

        'ispow2' : 'To test if an argument is a power of 2, use the <prosody rate="x-slow" volume="x-loud">is</prosody>pow2 function, spelled <prosody rate="x-slow">i.s.p.o.w.</prosody>2.  Returns a boolean value.',

        'nextpow2' : 'To get the smallest power of 2 that is equal to or less than an integer argument, use the <prosody rate="x-slow" volume="x-loud">nextpow2</prosody> function, spelled <prosody rate="x-slow">n.e.x.t.p.o.w</prosody>2. Returns 0 for 0 argument, and negative value for negative arguments.',

        'mean' : 'To get the mean of the values in an array, use the <prosody rate="x-slow" volume="x-loud">mean</prosody> function, spelled <prosody rate="x-slow">m.e.a.n.</prosody>.',

        'std' : 'To get the standard deviation of the values in an array, use the <prosody rate="x-slow" volume="x-loud">std</prosody> function, spelled <prosody rate="x-slow">s.t.d.</prosody>.',

        'median' : 'To get the median of the values in an array, use the <prosody rate="x-slow" volume="x-loud">median</prosody> function, spelled <prosody rate="x-slow">m.e.d.i.a.n.</prosody>.',

        'fft' : 'To get the multidimensional fast Fourier transform of the values in an array, use the <prosody rate="x-slow" volume="x-loud">fft</prosody> function, spelled <prosody rate="x-slow">f.f.t.</prosody>.',

        'conv' : 'To get the convolution of two vectors, use the <prosody rate="x-slow" volume="x-loud">conv</prosody> function, spelled <prosody rate="x-slow">c.o.n.v.</prosody>.',

        'parse' : 'To convert a string number to a numeric value, use the <prosody rate="x-slow" volume="x-loud">parse</prosody> function, spelled <prosody rate="x-slow">p.a.r.s.e.</prosody>. The first argument is the type to convert to, like Int or Float, and the second is the string to convert.',

        'float' : 'To convert a number or array of numbers to floats, use the <prosody rate="x-slow" volume="x-loud">float</prosody> function, spelled <prosody rate="x-slow">f.l.o.a.t.</prosody>.',

        'isodd' : 'To test if an argument is odd, use the <prosody rate="x-slow" volume="x-loud">is</prosody>odd function, spelled <prosody rate="x-slow">i.s.o.d.d.</prosody>.  Returns a boolean value.',

        'iseven' : 'To test if an argument is even, use the <prosody rate="x-slow" volume="x-loud">is</prosody>even function, spelled <prosody rate="x-slow">i.s.e.v.e.n.</prosody>.  Returns a boolean value.',

        'rand' : 'To generate a random number in a particular range, use the <prosody rate="x-slow" volume="x-loud">rand</prosody> function, spelled <prosody rate="x-slow">r.a.n.d.</prosody>.  The argument can be a range or a collection or even a type.  If type Float64 is used, you get a value from zero to one, excluding one.',

        'lengthString' : 'To get the length of a string, use the length function, spelled <prosody rate="slow">l.e.n.g.t.h.</prosody>.',

        'concatenate' : 'To concatenate two strings, use the <say-as interpret-as="spell-out">*</say-as> function, using the <say-as interpret-as="spell-out">*</say-as> character.',

        'grapheme' : 'To iterate over the characters of a string, use the grapheme function, spelled <prosody rate="slow">g.r.a.p.h.e.m.e.</prosody>.',

        'ismatch' : 'To test if a regular expression matches a string, use the <prosody rate="x-slow" volume="x-loud">is</prosody>match function, spelled <prosody rate="x-slow">i.s.m.a.t.c.h.</prosody>.  The first argument is the regular expression and the second is the string being searched.  Returns a boolean value.',

        'matchall' : 'To get all the regular expression matches with a string, use the match<prosody rate="x-slow" volume="x-loud">all</prosody> function, spelled <prosody rate="x-slow">m.a.t.c.h.a.l.l.</prosody>.  The first argument is the regular expression and the second is the string being searched.  Returns a vector of all matching substrings.',

        'search' : 'To find where characters match in a string, use the search function, spelled <prosody rate="x-slow">s.e.a.r.c.h.</prosody>.  The first argument is the string being searched and the second is the character or string to look for.  Returns a range of indicies where the first match occured, with the range zero to negative one if there is no match. An additional argument can specify which index to start the search from. To reverse the search direction, use the <prosody rate="x-slow" volume="x-loud">r</prosody>search function.',

        'reverse' : 'To reverse the order of the characters of a string, use the reverse function, spelled <prosody rate="slow">r.e.v.e.r.s.e.</prosody>.',

        'contains' : 'To test if a string contains a particular substring, use the contains function, spelled <prosody rate="x-slow">c.o.n.t.a.i.n.s.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'startswith' : 'To test if a string starts with a particular substring, use the startswith function, spelled <prosody rate="x-slow">s.t.a.r.t.s.w.i.t.h.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'endswith' : 'To test if a string ends with a particular substring, use the endswith function, spelled <prosody rate="x-slow">e.n.d.s.w.i.t.h.</prosody>.  The first argument is the main string and the second is the string being searched for.  Returns a boolean value.',

        'isascii' : 'To test if all characters in a string are ascii, use the <prosody rate="x-slow" volume="x-loud">is</prosody>ascii function, spelled <prosody rate="x-slow">i.s.a.s.c.i.i.</prosody>. Returns a boolean value.',

        'isdigit' : 'To test if all characters in a string are numeric digits, use the <prosody rate="x-slow" volume="x-loud">is</prosody>digit function, spelled <prosody rate="x-slow">i.s.d.i.g.i.t.</prosody>. Returns a boolean value.',

        'isspace' : 'To test if all characters in a string are whitespace characters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>space function, spelled <prosody rate="x-slow">i.s.s.p.a.c.e.</prosody>. Returns a boolean value.',

        'isupper' : 'To test if all characters in a string are uppercase letters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>upper function, spelled <prosody rate="x-slow">i.s.u.p.p.e.r.</prosody>. Returns a boolean value.',

        'islower' : 'To test if all characters in a string are lowercase letters, use the <prosody rate="x-slow" volume="x-loud">is</prosody>lower function, spelled <prosody rate="x-slow">i.s.l.o.w.e.r.</prosody>. Returns a boolean value.',

        'size' : 'To get the dimensions of an array, use the <prosody rate="x-slow" volume="x-loud">size</prosody> function, spelled <prosody rate="x-slow">s.i.z.e.</prosody>. Returns a tuple.',

        'vcat' : 'To vertically concatenate two arrays, use the <prosody rate="x-slow" volume="x-loud">v</prosody>cat function, spelled <prosody rate="x-slow">v.c.a.t.</prosody>.',

        'hcat' : 'To horizontally concatenate two arrays, use the <prosody rate="x-slow" volume="x-loud">h</prosody>cat function, spelled <prosody rate="x-slow">h.c.a.t.</prosody>.',

        'find' : 'To find the locations of the elements of an array that satisfy a predicate function, use the find function, spelled <prosody rate="x-slow">f.i.n.d.</prosody>. The first argument is the predicate function and the second is the array name. Returns a vector of the indicies of the elements in the array that satisfy the predicate.',

    },
};
