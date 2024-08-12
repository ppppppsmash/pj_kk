"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./Logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description: "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
]

export function Header() {
  const pathname = usePathname()
  
  const [isOpen, setIsOpen] = useState(false)
  const [isClose, setIsClose] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="absolute bg-transparent z-40 top-0 left-0 w-full h-[90px] sm:h-[80px]">
        <div className="flex items-center justify-between px-8 w-full mx-auto pt-4">
          <Logo />

          <NavigationMenu className="sm:flex hidden animate-fade-in-bottom duration-500 delay-300">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),
                    pathname === "/" ? "after:scale-x-100 after:scale-y-100" : "")}>
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),
                    pathname === "/about" ? "after:scale-x-100 after:scale-y-100" : "")}>
                    ABOUT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/company" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),
                    pathname === "/company" ? "after:scale-x-100 after:scale-y-100" : "")}>
                    COMPANY
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),
                    pathname === "/news" ? "after:scale-x-100 after:scale-y-100" : "")}>
                    NEWS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/service" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <NavigationMenuTrigger
                      className={cn(pathname === "/service" ? "after:scale-x-100 after:scale-y-100" : "")}
                    >SERVICE</NavigationMenuTrigger>
                  </NavigationMenuLink>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className={cn(
                            "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          )}
                          href="/service"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            測試
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            test test test test test test test test test test test test
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/test1" title="Introduction">
                      test test test test test test test test test test test test
                    </ListItem>
                    <ListItem href="/test1" title="Installation">
                      test test test test test test test test test test test test
                    </ListItem>
                    <ListItem href="/test1" title="Typography">
                      test test test test test test test test test test test test
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),
                    pathname === "/contact" ? "after:scale-x-100 after:scale-y-100" : "")}>
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div
            className="sm:hidden block bg-gray fixed top-0 right-0 rounded-md w-16 h-16 cursor-pointer z-[9999] text-center
              rounded-bl-[25px]"
            onClick={handleClick}
          >
            <span
              className={cn("relative bg-black w-8 h-[2px] inline-block mt-[30px] transition-all duration-150",
                "before:absolute before:-top-2 before:left-0 before:transition-all before:inline-block before:w-8 before:h-[2px] before:bg-black",
                "after:absolute after:top-2 after:left-0 after:transition-all after:inline-block after:w-8 after:h-[2px] after:bg-black",
                isOpen ? "bg-transparent inline-block mt-[30px] transition-all duration-150 before:top-0 before:rotate-[135deg] after:top-0 after:rotate-[-135deg]" : ""
              )}
            ></span>
          </div>

          <div className={cn(
            "fixed top-0 right-0 rounded-[50%] h-[100px] w-[100px] cursor-pointer z-[9998] text-center scale-0 bg-gray transition-all duration-1000",
            isOpen ? "scale-[80]" : "",
            isClose ? "" : "scalse-[80]"
            )}
          />

          <nav className={cn(
            "h-[100svh] sm:h-auto fixed sm:hidden top-0 right-0 w-full transition-all duration-500",
            isOpen ? "opacity-1 z-[9998]" : "opacity-0 hidden"
            )}
          >
            <ul className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full",
              )}
            >
              <li className="text-[30px] no-underline text-black px-4 py-5 transition-all duration-300 cursor-pointer">
                <Link href="/" onClick={handleCloseClick}>HOME</Link>
              </li>
              <li className="text-[30px] no-underline text-black px-4 py-5 transition-all duration-300 cursor-pointer">
                <Link href="/about" onClick={handleCloseClick}>ABOUT</Link>
              </li>
              <li className="text-[30px] no-underline text-black px-4 py-5 transition-all duration-300 cursor-pointer">
                <Link href="/news" onClick={handleCloseClick}>NEWS</Link>
              </li>
              <li className="text-[30px] no-underline text-black px-4 py-5 transition-all duration-300 cursor-pointer">
                <Link href="/service" onClick={handleCloseClick}>SERVICE</Link>
              </li>
              <li className="text-[30px] no-underline text-black px-4 py-5 transition-all duration-300 cursor-pointer">
                <Link href="/contact" onClick={handleCloseClick}>CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
