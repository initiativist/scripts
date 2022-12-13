#include <iostream>
void traverse(int count, char* list[])
{
    for (int i = 0; i < count - 1; i++)
    {
        std::cout << "list[" << i << "] = " << list[i] << std::endl;
    }
}

int main(int argc, char** argv)
{
    char* userArgs[argc];
    for (int i = 1; i < argc; i++)
    {
        userArgs[i-1] = argv[i]; 
    }
    
    traverse(argc, userArgs);
    return 0;
}