"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { type addToCart } from "@/server-actions/add-to-cart";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { routes } from "@/lib/routes";
import { cn, handleInputQuantity } from "@/lib/utils";
import Link from "next/link";

export const ProductForm = (props: {
  addToCartAction: typeof addToCart;
  availableInventory: string | null;
  productId: number;
  productName: string | null;
  disableQuantitySelector?: boolean;
  price: number | string | null;
  buttonSize?: "default" | "sm";
  description: string | null;
}) => {
  const [quantity, setQuantity] = useState<string | number>(1);
  let [isPending, startTransition] = useTransition();

  const extractNumber = (description: string | null) => {
    const str = description;

    if (!str) return;
    const match = str.match(/\+(\d+)/);

    if (match) {
      const number = match[1];
      console.log(number); // Output: 92234235235
      return number;
    } else {
      console.log("No number found");
    }
  };

  return (
    <div
      className={cn(
        "flex items-end justify-start gap-4",
        props.disableQuantitySelector && "w-full"
      )}
    >
      {props.availableInventory &&
        Number(props.availableInventory) > 0 &&
        !props.disableQuantitySelector && (
          <div className="flex flex-col gap-1 items-start">
            <Label htmlFor="quantity">Quantity square feet of other unit</Label>
            <Input
              className="w-24"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onBlur={(e) => handleInputQuantity(e, setQuantity)}
              type="number"
            />
          </div>
        )}
      <br />

      {
        <div className="flex flex-col gap-1 items-start">
          <Label htmlFor="quantity">total calculated</Label>
          <div className="w-24">{Number(quantity) * Number(props.price)}</div>
        </div>
      }
      {props.availableInventory && Number(props.availableInventory) > 0 ? (
        <Button
          size={props.buttonSize ?? "default"}
          className={cn(props.disableQuantitySelector ? "w-full" : "w-36")}
          onClick={() => {
            const phoneNumber = extractNumber(props.description);
            if (phoneNumber) {
              window.location.href = `tel:${phoneNumber}`;
            } else {
              toast({
                title: "Phone number not found",
                description: "We couldn’t find a phone number to call.",
              });
            }
          }}
        >
          Get Quote
        </Button>
      ) : (
        <Button
          variant="secondary"
          disabled={true}
          className={cn(props.disableQuantitySelector ? "w-full" : "w-36")}
        >
          Sold Out
        </Button>
      )}
    </div>
  );
};
