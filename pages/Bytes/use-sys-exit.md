---
title: Wrap main() in sys.exit() call
date: 2025-3-03
tag: Python
author: Corin
---

# Wrap main() function in sys.exit() callback

I'm used to writing Python scripts with a final function block that reads:

```python
if __name__ == "__main__":
    main()
```

Meaning, "if the Python script is run as the main program (as opposed to being imported as a module), then execute the `main()` function."

When working on a recent script, my [Copilot](https://github.com/features/copilot) autocomplete suggested a more complex signature: 

```python
def main():
    try:
        do_something = something()
        print("We did something!")
        return 0
    except Exception as e:
        print(f"Error message: {e}", file=sys.stderr)
        return 1

if __name__ == "__main__":
    sys.exit(main())
```

This is a best practice way to connect the output of the `main()` function to the main exit codes that a command-line application should provide: `0` for *exited successfully* and `1` for *exited with an error*."

So here we:

1) write the `main()` function in such a way as to return either `0` or `1` based on the outcome of our `try...except` block; and 

2) wrap the `main()` function in the `sys.exit()` call, so that the `exit()` function will receive that output, and the program will exit with an appropriate execution code.