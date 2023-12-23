package refined4s.types

import refined4s.*
import refined4s.internal.numericTools

/** @author Kevin Lee
  * @since 2023-04-26
  */
trait numeric {

  trait Numeric[A: math.Ordering] extends Refined[A] {
    given numericOrdering: Ordering[Type] = deriving[Ordering]

    given numericToOrdered: Conversion[Type, Ordered[Type]] with {
      def apply(a: Type): Ordered[Type] =
        Ordered.orderingToOrdered[Type](a)(using numericOrdering)
    }
  }

  trait InlinedNumeric[A: math.Ordering] extends InlinedRefined[A] {
    given numericOrdering: Ordering[Type] = deriving[Ordering]

    given numericToOrdered: Conversion[Type, Ordered[Type]] with {
      def apply(a: Type): Ordered[Type] =
        Ordered.orderingToOrdered[Type](a)(using numericOrdering)
    }
  }

  type NegInt = NegInt.Type
  object NegInt extends Numeric[Int] {
    override inline def invalidReason(a: Int): String = expectedMessage("a negative Int")

    override inline def predicate(a: Int): Boolean = a < 0

  }

  type NonNegInt = NonNegInt.Type
  object NonNegInt extends Numeric[Int] {
    override inline def invalidReason(a: Int): String = expectedMessage("a non-negative Int")

    override inline def predicate(a: Int): Boolean = a >= 0

  }

  type PosInt = PosInt.Type
  object PosInt extends Numeric[Int] {
    override inline def invalidReason(a: Int): String = expectedMessage("a positive Int")

    override inline def predicate(a: Int): Boolean = a > 0

  }

  type NonPosInt = NonPosInt.Type
  object NonPosInt extends Numeric[Int] {
    override inline def invalidReason(a: Int): String = expectedMessage("a non-positive Int")

    override inline def predicate(a: Int): Boolean = a <= 0

  }

  type NegLong = NegLong.Type
  object NegLong extends Numeric[Long] {
    override inline def invalidReason(a: Long): String = expectedMessage("a negative Long")

    override inline def predicate(a: Long): Boolean = a < 0L

  }

  type NonNegLong = NonNegLong.Type
  object NonNegLong extends Numeric[Long] {
    override inline def invalidReason(a: Long): String = expectedMessage("a non-negative Long")

    override inline def predicate(a: Long): Boolean = a >= 0L

  }

  type PosLong = PosLong.Type
  object PosLong extends Numeric[Long] {
    override inline def invalidReason(a: Long): String = expectedMessage("a positive Long")

    override inline def predicate(a: Long): Boolean = a > 0L

  }

  type NonPosLong = NonPosLong.Type
  object NonPosLong extends Numeric[Long] {
    override inline def invalidReason(a: Long): String = expectedMessage("a non-positive Long")

    override inline def predicate(a: Long): Boolean = a <= 0L

  }

  type NegShort = NegShort.Type
  object NegShort extends Numeric[Short] {
    override inline def invalidReason(a: Short): String = expectedMessage("a negative Short")

    override inline def predicate(a: Short): Boolean = a < 0

  }

  type NonNegShort = NonNegShort.Type
  object NonNegShort extends Numeric[Short] {
    override inline def invalidReason(a: Short): String = expectedMessage("a non-negative Short")

    override inline def predicate(a: Short): Boolean = a >= 0

  }

  type PosShort = PosShort.Type
  object PosShort extends Numeric[Short] {
    override inline def invalidReason(a: Short): String = expectedMessage("a positive Short")

    override inline def predicate(a: Short): Boolean = a > 0

  }

  type NonPosShort = NonPosShort.Type
  object NonPosShort extends Numeric[Short] {
    override inline def invalidReason(a: Short): String = expectedMessage("a non-positive Short")

    override inline def predicate(a: Short): Boolean = a <= 0

  }

  type NegByte = NegByte.Type
  object NegByte extends Numeric[Byte] {
    override inline def invalidReason(a: Byte): String = expectedMessage("a negative Byte")

    override inline def predicate(a: Byte): Boolean = a < 0

  }

  type NonNegByte = NonNegByte.Type
  object NonNegByte extends Numeric[Byte] {
    override inline def invalidReason(a: Byte): String = expectedMessage("a non-negative Byte")

    override inline def predicate(a: Byte): Boolean = a >= 0

  }

  type PosByte = PosByte.Type
  object PosByte extends Numeric[Byte] {
    override inline def invalidReason(a: Byte): String = expectedMessage("a positive Byte")

    override inline def predicate(a: Byte): Boolean = a > 0

  }

  type NonPosByte = NonPosByte.Type
  object NonPosByte extends Numeric[Byte] {
    override inline def invalidReason(a: Byte): String = expectedMessage("a non-positive Byte")

    override inline def predicate(a: Byte): Boolean = a <= 0

  }

  type NegFloat = NegFloat.Type
  object NegFloat extends Numeric[Float] {
    override inline def invalidReason(a: Float): String = expectedMessage("a negative Float")

    override inline def predicate(a: Float): Boolean = a < 0f

  }

  type NonNegFloat = NonNegFloat.Type
  object NonNegFloat extends Numeric[Float] {
    override inline def invalidReason(a: Float): String = expectedMessage("a non-negative Float")

    override inline def predicate(a: Float): Boolean = a >= 0f

  }

  type PosFloat = PosFloat.Type
  object PosFloat extends Numeric[Float] {
    override inline def invalidReason(a: Float): String = expectedMessage("a positive Float")

    override inline def predicate(a: Float): Boolean = a > 0f

  }

  type NonPosFloat = NonPosFloat.Type
  object NonPosFloat extends Numeric[Float] {
    override inline def invalidReason(a: Float): String = expectedMessage("a non-positive Float")

    override inline def predicate(a: Float): Boolean = a <= 0f

  }

  type NegDouble = NegDouble.Type
  object NegDouble extends Numeric[Double] {
    override inline def invalidReason(a: Double): String = expectedMessage("a negative Double")

    override inline def predicate(a: Double): Boolean = a < 0d

  }

  type NonNegDouble = NonNegDouble.Type
  object NonNegDouble extends Numeric[Double] {
    override inline def invalidReason(a: Double): String = expectedMessage("a non-negative Double")

    override inline def predicate(a: Double): Boolean = a >= 0d

  }

  type PosDouble = PosDouble.Type
  object PosDouble extends Numeric[Double] {
    override inline def invalidReason(a: Double): String = expectedMessage("a positive Double")

    override inline def predicate(a: Double): Boolean = a > 0d

  }

  type NonPosDouble = NonPosDouble.Type
  object NonPosDouble extends Numeric[Double] {
    override inline def invalidReason(a: Double): String = expectedMessage("a non-positive Double")

    override inline def predicate(a: Double): Boolean = a <= 0d

  }

  val BigInt0: BigInt = numericTools.BigInt0

  val BigDecimal0: BigDecimal = numericTools.BigDecimal0

  type NegBigInt = NegBigInt.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NegBigInt extends InlinedNumeric[BigInt] {
    override inline def invalidReason(a: BigInt): String = expectedMessage("a negative BigInt")

    override def predicate(a: BigInt): Boolean = a < BigInt0

    override inline val inlinedExpectedValue = "a negative BigInt"

    override inline def inlinedPredicate(inline a: BigInt): Boolean = ${ numericTools.isNegativeBigInt('a) }

    inline def apply(inline a: Int): Type = apply(BigInt(a))

    inline def apply(inline a: Long): Type = apply(BigInt(a))

    inline def apply(inline a: String): Type = apply(BigInt(a))

  }

  type NonNegBigInt = NonNegBigInt.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NonNegBigInt extends InlinedNumeric[BigInt] {
    override inline def invalidReason(a: BigInt): String = expectedMessage("a non-negative BigInt")

    override def predicate(a: BigInt): Boolean = a >= BigInt0

    override inline val inlinedExpectedValue = "a non-negative BigInt"

    override inline def inlinedPredicate(inline a: BigInt): Boolean = ${ numericTools.isNonNegativeBigInt('a) }

    inline def apply(inline a: Int): Type = apply(BigInt(a))

    inline def apply(inline a: Long): Type = apply(BigInt(a))

    inline def apply(inline a: String): Type = apply(BigInt(a))
  }

  type PosBigInt = PosBigInt.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object PosBigInt extends InlinedNumeric[BigInt] {
    override inline def invalidReason(a: BigInt): String = expectedMessage("a positive BigInt")

    override def predicate(a: BigInt): Boolean = a > BigInt0

    override inline val inlinedExpectedValue = "a positive BigInt"

    override inline def inlinedPredicate(inline a: BigInt): Boolean = ${ numericTools.isPositiveBigInt('a) }

    inline def apply(inline a: Int): Type = apply(BigInt(a))

    inline def apply(inline a: Long): Type = apply(BigInt(a))

    inline def apply(inline a: String): Type = apply(BigInt(a))
  }

  type NonPosBigInt = NonPosBigInt.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NonPosBigInt extends InlinedNumeric[BigInt] {
    override inline def invalidReason(a: BigInt): String = expectedMessage("a non-positive BigInt")

    override def predicate(a: BigInt): Boolean = a <= BigInt0

    override inline val inlinedExpectedValue = "a non-positive BigInt"

    override inline def inlinedPredicate(inline a: BigInt): Boolean = ${ numericTools.isNonPositiveBigInt('a) }

    inline def apply(inline a: Int): Type = apply(BigInt(a))

    inline def apply(inline a: Long): Type = apply(BigInt(a))

    inline def apply(inline a: String): Type = apply(BigInt(a))
  }

  type NegBigDecimal = NegBigDecimal.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NegBigDecimal extends InlinedNumeric[BigDecimal] {
    override inline def invalidReason(a: BigDecimal): String = expectedMessage("a negative BigDecimal")

    override def predicate(a: BigDecimal): Boolean = a < BigDecimal0

    override inline val inlinedExpectedValue = "a negative BigDecimal"

    override inline def inlinedPredicate(inline a: BigDecimal): Boolean = ${ numericTools.isNegativeBigDecimal('a) }

    inline def apply(inline a: Int): Type = apply(BigDecimal(a))

    inline def apply(inline a: Long): Type = apply(BigDecimal(a))

    inline def apply(inline a: Float): Type = apply(BigDecimal(a))

    inline def apply(inline a: Double): Type = apply(BigDecimal(a))

    inline def apply(inline a: String): Type = apply(BigDecimal(a))
  }

  type NonNegBigDecimal = NonNegBigDecimal.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NonNegBigDecimal extends InlinedNumeric[BigDecimal] {
    override inline def invalidReason(a: BigDecimal): String = expectedMessage("a non-negative BigDecimal")

    override def predicate(a: BigDecimal): Boolean = a >= BigDecimal0

    override inline val inlinedExpectedValue = "a non-negative BigDecimal"

    override inline def inlinedPredicate(inline a: BigDecimal): Boolean = ${ numericTools.isNonNegativeBigDecimal('a) }

    inline def apply(inline a: Int): Type = apply(BigDecimal(a))

    inline def apply(inline a: Long): Type = apply(BigDecimal(a))

    inline def apply(inline a: Float): Type = apply(BigDecimal(a))

    inline def apply(inline a: Double): Type = apply(BigDecimal(a))

    inline def apply(inline a: String): Type = apply(BigDecimal(a))
  }

  type PosBigDecimal = PosBigDecimal.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object PosBigDecimal extends InlinedNumeric[BigDecimal] {
    override inline def invalidReason(a: BigDecimal): String = expectedMessage("a positive BigDecimal")

    override def predicate(a: BigDecimal): Boolean = a > BigDecimal0

    override inline val inlinedExpectedValue = "a positive BigDecimal"

    override inline def inlinedPredicate(inline a: BigDecimal): Boolean = ${ numericTools.isPositiveBigDecimal('a) }

    inline def apply(inline a: Int): Type = apply(BigDecimal(a))

    inline def apply(inline a: Long): Type = apply(BigDecimal(a))

    inline def apply(inline a: Float): Type = apply(BigDecimal(a))

    inline def apply(inline a: Double): Type = apply(BigDecimal(a))

    inline def apply(inline a: String): Type = apply(BigDecimal(a))
  }

  type NonPosBigDecimal = NonPosBigDecimal.Type
  @SuppressWarnings(Array("org.wartremover.warts.Overloading"))
  object NonPosBigDecimal extends InlinedNumeric[BigDecimal] {
    override inline def invalidReason(a: BigDecimal): String = expectedMessage("a non-positive BigDecimal")

    override def predicate(a: BigDecimal): Boolean = a <= BigDecimal0

    override inline val inlinedExpectedValue = "a non-positive BigDecimal"

    override inline def inlinedPredicate(inline a: BigDecimal): Boolean = ${ numericTools.isNonPositiveBigDecimal('a) }

    inline def apply(inline a: Int): Type = apply(BigDecimal(a))

    inline def apply(inline a: Long): Type = apply(BigDecimal(a))

    inline def apply(inline a: Float): Type = apply(BigDecimal(a))

    inline def apply(inline a: Double): Type = apply(BigDecimal(a))

    inline def apply(inline a: String): Type = apply(BigDecimal(a))
  }

}
object numeric extends numeric
