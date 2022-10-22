package main

func split_string_on_character(value string, splitStr string) []string {
	result := make([]string, 1, 2)
	if len(value) <= 1 {
		return result
	}
	if len(splitStr) > 1 {
		panic("splitStr must be a single character")
	}

	for i := 0; i < len(value); i++ {
		if value[i] == splitStr[0] {
			reallocatedResult := make([]string, len(result), cap(result)+1)
			copy(reallocatedResult, result)
			reallocatedResult = reallocatedResult[0 : len(result)+1]
			result = reallocatedResult
			continue
		}
		result[len(result)-1] = result[len(result)-1] + string(value[i])
	}
	return result
}
